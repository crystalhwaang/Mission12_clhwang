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
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Year</th>
                            <th>Director</th>
                            <th>Rating</th>
                            <th>Category</th>
                        </tr>
                    </thead>
                    <MovieList />
                    <tbody>
                        {md.map((m) => (
                            <tr>
                                <td>{m.Title}</td>
                                <td>{m.Year}</td>
                                <td>{m.Director}</td>
                                <td>{m.Rating}</td>
                                <td>{m.Category}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}



export default MovieCollection;