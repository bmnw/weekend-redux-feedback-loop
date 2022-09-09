import React from 'react';
import axios from 'axios';
import { HashRouter as Router, Route, Link, useHistory } from 'react-router-dom';
import './App.css';
import Header from '../Header/Header.jsx';
import Feeling from '../Feeling/Feeling.jsx';
import Content from '../Content/Content.jsx';
import Support from '../Support/Support.jsx';
import Comments from '../Comments/Comments.jsx';
import Review from '../Review/Review.jsx';
import SubmitSuccess from '../SubmitSuccess/SubmitSuccess.jsx';
import Container from '@mui/material/Container';

function App() {

  return (
    <div className='App'>
      <Header />
      <Router>
        <Container maxWidth="xs">
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
          <Route exact path="/submit-success">
            <SubmitSuccess />
          </Route>
        </Container>
      </Router>

    </div>
  );
}

export default App;
