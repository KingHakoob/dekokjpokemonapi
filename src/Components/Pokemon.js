import { GetPokeData } from "../Service/DataService";
import { useState, useEffect } from "react";

export default function Pokemon() {
    const [search, setSearch] = useState('pikachu');
    const [name, setName] = useState('');
    const [index, setIndex] = useState(0);
    const [types, setTypes] = useState([]);
    const [abilites, setAbilities] = useState('');
    const [moves, setMoves] = useState('');


    const GetPokemon = async (search) => {
        let pokeData = await GetPokeData(search);

        setName(pokeData.name);
        setIndex(pokeData.id);
        setTypes(pokeData.types.map(type => type.type.name).join(', '));
        setAbilities(pokeData.abilities.map(abilities => abilities.ability.name).join(', '));
        setMoves(pokeData.moves.map(moves => moves.move.name).join(', '));
    }
    useEffect(() => {
        GetPokemon(search);
    }, [])
    return (
        <>
            <h1>Pokemon</h1>
            <input type="text" placeholder="Enter Pokemon Name Or Index Here" onChange={(e) => setSearch(e.target.value)} />
            <button onClick={() => GetPokemon(search)}>Press Me To Search</button>
            <h1>Name: {name}</h1>
            <h1>Index: {index}</h1>
            <h1>Type: {types}</h1>
            <h1>Abilities: {abilites}</h1>
            <h1>Moves: {moves}</h1>
        </>
    );
}

// Name, Index, Type, Locations, Evolutions, Abilities, Moves, Picture