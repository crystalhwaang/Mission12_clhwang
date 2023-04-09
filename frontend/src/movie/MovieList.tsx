import { useState } from "react";
import {Movie} from "../types/movie"
function MovieList() 
{
    const [movieData, setMovieData] = useState<Movie[]>([]);
    const fetchMovie = async () => {
        const rsp = await fetch("https://localhost:7242/movie");
        const temp = await rsp.json();
        setMovieData(temp);
    }

    fetchMovie();

    return (
        <>
            <table>
                <tbody>
                    {movieData.map((m) => (
                        <tr key = {m.movieId} >
                            <td>{m.title}</td>
                            <td>{m.year}</td>
                            <td>{m.director}</td>
                            <td>{m.rating}</td>
                            <td>{m.category}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )

}

export default MovieList;