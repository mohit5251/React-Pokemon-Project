import { useEffect, useState } from "react"
import "./index.css";
import { PokemonCards } from "./PokemonCards";

export const Pokemon = () => {
    
    const [pokemon, setPokemon] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [search, setSearch] = useState("");

    const API="https://pokeapi.co/api/v2/pokemon?limit=124";

    const fetchPokemon = async() => {

        try {
            const res = await fetch(API);
            const data  = await res.json();
            
            const detailedPokemonData = data.results.map( async(currPokemon) => {
                const res = await fetch(currPokemon.url);
                const data  = await res.json();
                return data;  
            })

            const detailedResponse = await Promise.all(detailedPokemonData);
            setPokemon(detailedResponse);
            setLoading(false);
        } catch (error) {
            console.log(error);
            setError(error);
            setLoading(false);
        }
    }; 

    useEffect(() => {
        fetchPokemon();
    }, []);

    //Search Functionality
    const searchData = pokemon.filter((currPokemon) => currPokemon.name.toLowerCase().includes(search.toLowerCase()))

    if(loading) return(
        <section className="container">
            <h1>Loading...</h1>
        </section>
    )
    if(error) return (
        <section className="container">
            <h1>{error.message}</h1>
        </section>
    )

    return (
        <section className="container">
            <header>
                <h1>Lets Catch Pokémon</h1>
            </header>
            <div className="pokemon-search">
                <input type="text" placeholder="Search pokemon" value={search} onChange={(e) => setSearch(e.target.value)}/>
            </div>
            <div>
                <ul className="cards">
                    {
                        //pokemon.map((currPokemon) => {
                        searchData.map((currPokemon) => {
                            return <PokemonCards key={currPokemon.id} pokemonData={currPokemon} />
                        })
                    }
                </ul>
            </div>
        </section>
    )
}