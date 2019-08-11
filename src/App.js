import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Home from './views/Home';
import Movie from './views/Movie';
import NotFound from './components/NotFound';
import Footer from './components/Footer';
import injectContext from "./store/appContext";
import { ThemeContext } from 'styled-components';

const App = () => (
  <div className="d-flex flex-column h-100">
    <BrowserRouter>
      <React.Fragment>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/pelicula/:movieId" component={Movie} />
          <Route render={NotFound} />
        </Switch>
        <Footer />
      </React.Fragment>
    </BrowserRouter>
  </div>
)

export default injectContext(App);