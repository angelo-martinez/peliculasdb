import React from 'react';
import { 
    API_URL, 
    API_KEY 
} from '../config';
import styled from 'styled-components';
import MovieVTop from '../components/movieView/MovieVTop';
import MovieVInfo from '../components/movieView/MovieVInfo';
import MovieVBar from '../components/movieView/MovieVBar';

const MovieWrapper = styled.div`
  padding-bottom: 6.25rem;
  background-color: #141414;
`

class Movie extends React.Component {
  state = {
    movie: null,
    actors: null,
    directors: [],
    loading: false
  }

  componentDidMount() {
    // destructuring the props
    const { movieId } = this.props.match.params;

    if (localStorage.getItem(`${movieId}`)) {
      let state = JSON.parse(localStorage.getItem(`${movieId}`))
      this.setState({ ...state })
    } else {
      this.setState({ loading: true })
      // fetch the movie if nothing is in localstorage
      let endpoint = `${API_URL}movie/${movieId}?api_key=${API_KEY}&language=es`;
      this.fetchItems(endpoint);
    }
  }

  fetchItems = (endpoint) => {
    // Destructuring the props
    const { movieId } = this.props.match.params;

    fetch(endpoint)
    .then(result => result.json())
    .then(result => {

      if (result.status_code) {
        // If we don't find any movie
        this.setState({ loading: false });
      } else {
        this.setState({ movie: result }, () => {
          // ... then fetch actors in the setState callback function
          let endpoint = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`;
          fetch(endpoint)
          .then(result => result.json())
          .then(result => {

            const directors = result.crew.filter( (member) => member.job === "Director");

            this.setState({
              actors: result.cast,
              directors,
              loading: false
            }, () => {
              localStorage.setItem(`${movieId}`, JSON.stringify(this.state));
            })
          })
        })
      }
    })
    .catch(error => console.error('Error:', error))
  }

  render() {
    // Destructuring the props and state
    const { movieName } = this.props.location;
    const { movie, directors, actors, loading } = this.state;

    return (
      <MovieWrapper>
        {movie ?
        <div>
            <MovieVTop movie={movieName}/>
            <MovieVInfo movie={movie} directors={directors} />
            <MovieVBar time={movie.runtime} budget={movie.budget} revenue={movie.revenue} date={movie.release_date} />
        </div>
        : null }
      </MovieWrapper>
    )

  }
}

export default Movie;