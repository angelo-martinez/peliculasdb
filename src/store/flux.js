import {
    API_URL,
    API_KEY
} from '../config';

const getState = ({ getStore, setStore }) => {
	return {
		store: {
			movies: [],
			heroImage: null,
			loading: false,
			currentPage: 0,
			totalPages: 0,
			searchTerm: ''
		},
		actions: {
			searchItems: (searchTerm) => {
				//get the store
				const store = getStore();

				let endpoint = '';
				setStore({
					movies: [],
					loading: true,
					searchTerm
				})
		
				if (store.searchTerm === "") {
					endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=es&page=1`;
				} else {
					endpoint = `${API_URL}search/movie?api_key=${API_KEY}&language=es&query=${searchTerm}`;
				}
				this.fetchItems(endpoint);
			},
		
			loadMoreItems: () => {
				//get the store
				const store = getStore();
		
				let endpoint = '';
				setStore({ loading: true })
		
				if (store.searchTerm === '') {
					endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=es&page=${store.currentPage + 1}`;
				} else {
					endpoint = `${API_URL}search/movie?api_key=${API_KEY}&language=es&query=${store.searchTerm}&page=${store.currentPage + 1}`;
				}
				this.fetchItems(endpoint);
			},
		
			fetchItems: (endpoint) => {
				//get the store
				const store = getStore();
				
				fetch(endpoint)
					.then(result => result.json())
					.then(result => {
						setStore({
							movies: [...store.movies, ...result.results],
							heroImage: store.heroImage || result.results[0],
							loading: false,
							currentPage: result.page,
							totalPages: result.total_pages
						})
					})
					.catch(error => console.error('Error:', error))
			}
		}
	};
};

export default getState;