import React from "react";
import getState from "./flux.js";
import {
    API_URL,
	API_KEY,
	RANDOM_NUMBER
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
			const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=es&page=1`;
			let store = this.state.store;
			this.setState({ loading: true });
			fetch(endpoint)
				.then(response => {
					response.json()
					.then(data => {
						store.movies = data.results;
						store.heroImage= data.results[RANDOM_NUMBER];
						store.loading= false;
						store.currentPage= data.page;
						store.totalPages= data.total_pages;
						this.setState({ store });
						console.log(this.state);
					});
				})
				.catch(error => console.error('Error:', error));
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
