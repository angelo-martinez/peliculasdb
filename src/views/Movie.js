import React from 'react';
import { 
    API_URL, 
    API_KEY 
} from '../config';
import Spinner from '../components/Spinner';

class Movie extends React.Component {
  state = {
    movie: null,
    actors: null,
    directors: [],
    loading: false
  }

  render() {
    return (
      <div>
        Single Movie view
      </div>
    )

  }
}

export default Movie;