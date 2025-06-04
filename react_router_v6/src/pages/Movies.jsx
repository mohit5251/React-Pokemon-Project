import { useLoaderData } from "react-router-dom"
import { Card } from "../components/UI/Card";

export const Movies = () => {

    const movieData = useLoaderData();
    console.log(movieData);

    return (
        <>

        <ul className="container grid grid-four--cols">
            {movieData.Search.map((curMovie) => {
                return <Card key={curMovie.imdbID} movie={curMovie} />
            })}
        </ul>

        </>
    )
}