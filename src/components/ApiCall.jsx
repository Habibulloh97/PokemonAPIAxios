import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ApiCall = props =>{
    const [pokemon, setPokemon]= useState ({})
    const [isLoaded, setIsLoaded] = useState (false);
    const onClick = props=>{
        isLoaded? setIsLoaded(false): setIsLoaded(true)
    }

        axios.get("https://pokeapi.co/api/v2/pokemon?limit=807")
        .then(res=>{
            // console.log(res)
            setPokemon(res.data.results)
            
        })
        .catch(err=>{
            console.log(err)
        })
    console.log(pokemon)
    return(
        <div>
        <button className="btn btn-success" onClick={onClick}>Fetch Pokemon</button>
        {isLoaded ? 
        pokemon.map(poke=>{
            return <h3>Name: <span className="text-danger">{poke.name}</span></h3>
        }
            ):""
        }
        </div>
    )
    }

export default ApiCall