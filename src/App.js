import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LatestPosts from './components/LatestPosts';
import PostDetails from './components/PostDetails';
import './App.scss';

function App() {
  return (
    <Router>
      <Navbar bg="light">
        <Navbar.Brand href="/">Hey Jobs</Navbar.Brand>
      </Navbar>
      <Container>
        <Route path="/" exact component={LatestPosts} />
      </Container>
      <Route path="/postdetails/:id" component={PostDetails} />
    </Router>
  );
}

export default App;
