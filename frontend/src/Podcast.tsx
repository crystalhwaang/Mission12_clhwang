import React from 'react';
import './App.css';

function Podcast() {
    return (
        <>
            <Header />
            <Link />
        </>
    )
}

function Header() {
    return (
        <h1>Welcome to the Podcast Page!</h1>
    )
}

function Link() {
    return (
        <div>
            <h4>Click the link below to listen to our Podcast!</h4>
            <p><a href = "https://baconsale.com">Bacon Podcast</a></p>
        </div>
    )
}

export default Podcast;