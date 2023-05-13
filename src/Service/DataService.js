async function GetPokeData(name) {
    const result = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    let data = await result.json();
    return data;
}

export { GetPokeData }