// import { useLoaderData } from "react-router-dom"

// export const MovieDetails = () => {

//     // const params = useParams();
//     // console.log(params);
    
//     const movieData = useLoaderData();
//     console.log(movieData);
     
    

//     return (
//     <h1>Hello Movie Details</h1>
//     )
// }

import { NavLink, useLoaderData } from "react-router-dom";
import "../UI/Card.css";

export const MovieDetails = () => {
  const movieData = useLoaderData();
  console.log(movieData);

  const {Actor, Poster, Title, Runtime, Genre, Type, Year, Plot, BoxOffice, Awards, imdbRating} = movieData;

  // 192min
  const totalMinutes = Runtime.replace("min", "");
  const hours = Math.floor(totalMinutes / 60); // Calculate the number of hours
  const minutes = totalMinutes % 60; // Calculate the remaining minutes

  console.log(hours, minutes);

  const formattedTime = `${hours}hr ${minutes}min`;
  console.log(formattedTime);

  return (
    <li className="movie-detail-hero">
  <div className="movie-detail-container">
    <figure className="movie-detail-card">
      <div className="movie-detail-image">
        <img src={Poster} alt={Title} className="movie-detail-img" />
      </div>
      <div className="movie-detail-content">
        <div className="movie-detail-header">
          <h1 className="movie-detail-title">{Title}</h1>
          <div className="movie-detail-tag" style={{marginBottom: "3px"}}>{`#${Type}`}</div>
          <div className="movie-detail-tag">Year: {Year}</div>
        </div>
        <p className="movie-detail-description">{Plot}</p>
        <br />
        <p className="movie-detail-description">Awards: {Awards}</p>
        <div className="movie-detail-stats">
          <p className="movie-detail-info">Rating: {imdbRating}</p>
          <p className="movie-detail-info">{formattedTime}</p>
          <p className="movie-detail-info">{BoxOffice}</p>
        </div>
        <div>
          <NavLink
            to="/movie"
            className="movie-detail-tag"
            style={{ textAlign: "center", fontSize: "1.6rem" }}
          >
            Go Back
          </NavLink>
        </div>
      </div>
      <div className="movie-detail-boxoffice">{BoxOffice}</div>
    </figure>
  </div>
</li>

  );
};