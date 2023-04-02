import React from 'react';
import './App.css';
import MyImage from './MyImage.jpg';

function Home() {
  return (    
    <>
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

export default Home;