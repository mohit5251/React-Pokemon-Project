export const getMoviesData = async() => {

    try {
        const result = await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=${import.meta.env.VITE_API_KEY}&s=titanic&page=1`);
        const data = await result.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}