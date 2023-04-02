import React from 'react';
import logo from './logo.svg';
import './App.css';
import { teams } from './data';
import Card from '@mui/material/Card';
import { CardContent } from '@mui/material';
import { padding } from '@mui/system';
import TopBanner from "./new";
import MyImage from './MyImage.jpg';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Podcast from './Podcast';
import MovieCollection from './MovieCollection';

function App() {
  return (    
    <>
      <Router>
        <Routes>
          <Route path = "/podcast" Component={Podcast} />
          <Route path = "/moviecollection" Component={MovieCollection} />
        </Routes>
      </Router>
      <Header />
      <Image />
    </>
  );
}

function Header() {
  return (<h1>Joel's Movie Collection!</h1>)
}

function Image() {
  return (
    <div>
      <img src = {MyImage} alt = "Joel Hilton Image"/>
    </div>
  )
}

function TeamInfo(team: any) {
    return(
      <Card sx={{ maxWidth: 275, margin: 5}}>
        <CardContent>
        <h2>{team.school}</h2>
        <h3>Mascot: {team.name}</h3>
        <h3>Location:  {team.city}, {team.state}</h3>
        </CardContent>
      </Card>

    )
}

function TeamList() {
  return (
    <>
    {teams.map((team) => (
      <TeamInfo {...team} />
    ))}
    </>
  );
}

export default App;