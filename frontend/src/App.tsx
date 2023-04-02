import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Podcast from './Podcast';
import MovieCollection from './MovieCollection';
import Home from './Home';

function App() {
  return (    
    <>
      <Navigation />
      <Router>
        <Routes>
          <Route path='/' Component={Home} />
          <Route path = "/podcast" Component={Podcast} />
          <Route path = "/moviecollection" Component={MovieCollection} />
        </Routes>
      </Router>
    </>
  );
}

function Navigation() {
  return (
    <div>
      <p><a href = "/">Home</a></p>
      <p><a href = "/podcast">Podcast</a></p>
      <p><a href = "/moviecollection">Movie Collection</a></p>
    </div>
  )
}


export default App;