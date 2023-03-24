import React from 'react';
import logo from './logo.svg';
import './App.css';
import { teams } from './data';
import Card from '@mui/material/Card';
import { CardContent } from '@mui/material';
import { padding } from '@mui/system';

function App() {
  return (   
    <>
      <Header />
      <TeamList />
    </>
  );
}

function Header() {
  return (<h1>Learn About NCAA Basketball Teams!</h1>)
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