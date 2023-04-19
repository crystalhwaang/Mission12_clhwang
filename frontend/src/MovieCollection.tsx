import React from 'react';
import { useState } from 'react';
import data from "./MovieData.json";
import MovieList from './movie/MovieList';

const md = data.MovieData;

function MovieCollection() {

    return (
        <>
            <div>
                <h1>Joel Hilton's Movie Collection</h1>
            </div>
            <div>
                <table className="table">
                    <MovieList />
                </table>
            </div>
        </>
    )
}



export default MovieCollection;