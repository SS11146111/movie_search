import React from 'react';
import NotFound from "../assets/notFound.png"
import {useFetch} from "../hooks/useFetch";

export const MoviePage = ({url}) => {
    
    const { data: movieDetails, loading, error } = useFetch(url);
    
    if (loading) {
        return <div style={{color: "white", margin: "10px", textAlign:"center"}}>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    
    if (movieDetails) {
        return (
            <div className='page'>
                <div className="poster">
                    <img src={movieDetails.Poster || NotFound} alt="poster"/>
                </div>
                <div className="details">
                  <table>
                    <tbody>
                      <tr>
                        <th colSpan="2" style={{fontSize:"x-large", textAlign:"center", marginBottom:"20px"}}>{movieDetails.Title ||"----------"}</th>
                      </tr>
                      <tr>
                        <th>Year</th>
                        <td>{movieDetails.Year || "----------"}</td>
                      </tr>
                      <tr>
                        <th>Genre</th>
                        <td>{movieDetails.Genre || "----------"}</td>
                      </tr> 
                      <tr>
                        <th>Director</th>
                        <td>{movieDetails.Director || "----------"}</td>
                      </tr>
                      <tr>
                        <th>Writer</th>
                        <td>{movieDetails.Writer || "----------"}</td>
                      </tr>
                      <tr>
                        <th>Cast</th>
                        <td>{movieDetails.Actors || "----------"}</td>
                      </tr>
                      <tr>
                        <th>Plot</th>
                        <td>{movieDetails.Plot || "----------"}</td>
                      </tr>    
                      <tr>
                        <th>Runtime</th>
                        <td>{movieDetails.Runtime || "----------"}</td>
                      </tr>  
                      <tr>
                        <th>IMDb Rating</th>
                        <td>{movieDetails.imdbRating || "----------"}</td>
                      </tr>
                      <tr>
                        <th>Awards</th>
                        <td>{movieDetails.Awards || "----------"}</td>
                      </tr>
                      <tr>
                        <th>Rated</th>
                        <td>{movieDetails.Rated || "----------"}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
            </div>
        );
    } 
    
};


