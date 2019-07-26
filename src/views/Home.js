import React from 'react';
import styled from 'styled-components';
import {
    IMAGE_BASE_URL,
    POSTER_SIZE,
    BACKDROP_SIZE
} from '../config';
import { Context } from "../store/appContext";
import HeroImg from '../components/HeroImg';
import Grid from '../components/Grid';
import MovieCard from '../components/MovieCard';
import LoadMasBtn from '../components/LoadMasBtn';
import Spinner from '../components/Spinner';

const HomeGrid = styled.div`
    max-width: 80rem;
    margin: 0 auto;
    padding: 0 1.25rem;
`
const HomeWrapper = styled.div`
    background-color: #141414;
    color: #fff;
`

const Home = () => {
    return ( 
        <Context.Consumer>
            {({ store, actions }) => {
                return(
                    <HomeWrapper>
                        {store.heroImage ?
                            <div>
                                <HeroImg
                                    image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${store.heroImage.backdrop_path}`}
                                    title={store.heroImage.title}
                                    text={store.heroImage.overview}
                                />
                            </div> : null 
                        }
                        <HomeGrid>
                            <Grid
                                header={store.searchTerm ? 'Resultado de búsqueda' : 'Peliculas populares'}
                                loading={store.loading}
                            >
                            {store.movies.map( (element, i) => (
                                <MovieCard
                                    key={i}
                                    clickable={true}
                                    image={element.poster_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${element.poster_path}` : './images/no_image.jpg'}
                                    movieId={element.id}
                                    movieName={element.title}
                                />
                            ))}
                            </Grid>
                            {store.loading ? <Spinner /> : null} 
                            {(store.currentPage <= store.totalPages && !store.loading) ?
                            <LoadMasBtn text="Carga más" onClick={actions.loadMoreItems} />
                            : null
                            }
                        </HomeGrid>
                    </HomeWrapper>
                );
            }}
        </Context.Consumer>
    )
}

export default Home;