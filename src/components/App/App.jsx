import React from 'react';
import axios from 'axios';
import { HashRouter as Router, Route, Link, useHistory } from 'react-router-dom';
import './App.css';
import Feeling from '../Feeling/Feeling.jsx';
import Content from '../Content/Content.jsx';
import Support from '../Support/Support.jsx';
import Comments from '../Comments/Comments.jsx';
import Review from '../Review/Review.jsx';

function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
      <Router>
        <div>
          <Route exact path="/">
            <Feeling />
          </Route>
          <Route exact path="/content">
            <Content />
          </Route>
          <Route exact path="/support">
            <Support />
          </Route>
          <Route exact path="/comments">
            <Comments />
          </Route>
          <Route exact path="/review">
            <Review />
          </Route>
        </div>
      </Router>

    </div>
  );
}

export default App;
