import React from "react";
import getState from "./flux.js";
import {
    API_URL,
    API_KEY
} from '../config';

// Don't change, here is where we initialize our context, by default its just going to be Null.
export const Context = React.createContext(null);

// This function injects the global store to any view/component where you want to use it App.js
const injectContext = PassedComponent => {
	class StoreWrapper extends React.Component {
		constructor(props) {
			super(props);

			//this will be passed as the contenxt value
			this.state = getState({
				getStore: () => this.state.store,
				setStore: updatedStore =>
					this.setState({
						store: Object.assign(this.state.store, updatedStore)
					})
			});
		}

		componentDidMount() {
			/**
			 * EDIT THIS!
			 * This function is the equivalent to "window.onLoad", it only run once on the entire application lifetime
			 * you should do your ajax requests or fetch api requests here
			 **/
			const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=es&page=1`;
			fetch(
				endpoint
			)
				.then(response => {
					if (response.status !== 200) {
						alert("Connection error, status " + response.status);
						return;
					}
					response.json()
					.then(data => {
						let store = this.state.store;
						store.movies = data.results;
						store.heroImage= data.results[0];
						store.loading= false;
						store.currentPage= data.page;
						store.totalPages= data.total_pages;
						this.setState({ store });
						console.log(this.state);
					});
				})
				.catch(err => {
					alert("Fetch error: ", err);
				});
		}

		render() {
			// the initial value for the context its not null anymore, but the current state of this component,
			// the context will have a getStore and setStore functions available then, because they were declared
			// on the state of this component
			return (
				<Context.Provider value={this.state}>
					<PassedComponent {...this.props} />
				</Context.Provider>
			);
		}
	}
	return StoreWrapper;
};

export default injectContext;
