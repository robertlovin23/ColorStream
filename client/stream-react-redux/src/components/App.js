import React from 'react';
import Header from './layout/Header'
import StreamsList from './pages/StreamsList';
import StreamsCreate from './pages/StreamsCreate';
import StreamsShow from './pages/StreamsShow';
import StreamsDelete from './pages/StreamsDelete';
import StreamsEdit from './pages/StreamsEdit';
import history from '../history'
import { Router, Route, Switch } from 'react-router-dom';

const App = () => {
  return(
    <div className="ui container">
      <Router history={history}>
        <Header/>
        <div>
          <Switch>
            <Route path="/" exact component={StreamsList}/>
            <Route path="/streams/create" exact component={StreamsCreate}/>
            <Route path="/streams/:id" exact component={StreamsShow}/>
            <Route path="/streams/edit/:id" exact component={StreamsEdit}/>
            <Route path="/streams/delete/:id" exact component={StreamsDelete}/>
          </Switch>
        </div>
      </Router>
    </div>
  )
}

export default App;
