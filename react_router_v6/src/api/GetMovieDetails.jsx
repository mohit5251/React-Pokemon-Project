export const getMoviesDetails = async({params}) => {

    console.log(params);
    const id = params.movieID;

    try {
        const result = await fetch(`https://www.omdbapi.com/?i=${id}&apikey=${import.meta.env.VITE_API_KEY}`);
        const data = await result.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}