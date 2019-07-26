import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Home from './views/Home';
import Movie from './views/Movie';
import NotFound from './components/NotFound';
import Footer from './components/Footer';
import injectContext from "./store/appContext";


const App = () => (
  <div className="d-flex flex-column h-100">
    <BrowserRouter>
      <React.Fragment>
        <Header />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/:movieId" component={Movie} exact />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </React.Fragment>
    </BrowserRouter>
  </div>
)

export default injectContext(App);