import React from 'react';
import styled from 'styled-components';
import {
    API_URL,
    API_KEY,
    IMAGE_BASE_URL,
    POSTER_SIZE,
    BACKDROP_SIZE
} from '../config';
import HeroImg from '../components/HeroImg';
import SearchBar from '../components/SearchBar';
import Grid from '../components/Grid';
import MovieCard from '../components/MovieCard';
import LoadMasBtn from '../components/LoadMasBtn';
import Spinner from '../components/Spinner';

const HomeGrid = styled.div`
    max-width: 80rem;
    margin: 0 auto;
    padding: 0 1.25rem;
`

class Home extends React.Component {
    state = {
        movies: [],
        heroImage: null,
        loading: false,
        currentPage: 0,
        totalPages: 0,
        searchTerm: ''
    }

    componentDidMount() {    
        this.setState({ loading: true });
        const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=es&page=1`;
        this.fetchItems(endpoint);
    }

    searchItems = (searchTerm) => {
        let endpoint = '';
        this.setState({
            movies: [],
            loading: true,
            searchTerm
        })

        if (searchTerm === "") {
            endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=es&page=1`;
        } else {
            endpoint = `${API_URL}search/movie?api_key=${API_KEY}&language=es&query=${searchTerm}`;
        }
        this.fetchItems(endpoint);
    }

    loadMoreItems = () => {
        // Destructuring the state
        const { searchTerm, currentPage } = this.state;

        let endpoint = '';
        this.setState({ loading: true })

        if (searchTerm === '') {
            endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=es&page=${currentPage + 1}`;
        } else {
            endpoint = `${API_URL}search/movie?api_key=${API_KEY}&language=es&query=${searchTerm}&page=${currentPage + 1}`;
        }
        this.fetchItems(endpoint);
    }

    fetchItems = (endpoint) => {
        fetch(endpoint)
            .then(result => result.json())
            .then(result => {
                console.log(result);
                this.setState({
                    movies: [...this.state.movies, ...result.results],
                    heroImage: this.state.heroImage || result.results[0],
                    loading: false,
                    currentPage: result.page,
                    totalPages: result.total_pages
                })
                console.log(this.state);
            })
            .catch(error => console.error('Error:', error))
    }

    render() {
        // Destructuring the state
        const { movies, heroImage, loading, currentPage, totalPages, searchTerm } = this.state;
        return ( 
            <div >
                {heroImage ?
                    <div>
                    <HeroImg
                        image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${heroImage.backdrop_path}`}
                        title={heroImage.original_title}
                        text={heroImage.overview}
                    />
                    <SearchBar callback={this.searchItems}/>
                    </div> : null 
                }
                <HomeGrid>
                    <Grid
                        header={searchTerm ? 'Resultado de búsqueda' : 'Peliculas populares'}
                        loading={loading}
                    >
                    {movies.map( (element, i) => (
                        <MovieCard
                            key={i}
                            clickable={true}
                            image={element.poster_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${element.poster_path}` : './images/no_image.jpg'}
                            movieId={element.id}
                            movieName={element.original_title}
                        />
                    ))}
                    </Grid>
                    {loading ? <Spinner /> : null} 
                    {(currentPage <= totalPages && !loading) ?
                    <LoadMasBtn text="Carga más" onClick={this.loadMoreItems} />
                    : null
                    }
                </HomeGrid>
            </div>
        )
    }
}

export default Home;