import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
//import NotFound from './components/NotFound';
import Home from './views/Home';
//import Movie from './views/Movie';

const App = () => (
  <BrowserRouter>
    <React.Fragment>
      <Header />
      <Switch>
        <Route path="/" component={Home} exact />
        {/* <Route path="/:movieId" component={Movie} exact />
        <Route component={NotFound} /> */}
      </Switch>
    </React.Fragment>
  </BrowserRouter>
)

export default App;