import { NavLink } from "react-router-dom";
import "./Card.css";

export const Card = ({movie}) => {

    const {Poster, imdbID} = movie;

    return (
        <li className="hero-container">
            <div className="main-container">
            <div className="poster-container">
                <img src={Poster} className="poster" alt={imdbID} />
            </div>

            <div className="ticket-container">
                <div className="ticket__content">
                    <NavLink to={`/movies/${imdbID}`}>
                    <button className="ticket__buy-btn">Watch now</button>
                    </NavLink>
                </div>
            </div>
            </div>
    </li>
    )

}