async function GetPokeData(name) {
    const result = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    let data = await result.json();
    return data;
}

async function GetPokePic(pokeIndex){
    const result = await fetch("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + pokeIndex + ".png");
    const data = await result.blob();
    const pokeImgURL = URL.createObjectURL(data);
    return pokeImgURL;

    // const shinyPokeImgPromise = await fetch("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/" + pokeIndex + ".png");
    // const shinyPokeImgData = await shinyPokeImgPromise.blob();
    // const shinyPokeImgURL = URL.createObjectURL(shinyPokeImgData);
    // shinyPokeImg.className = ""
    // shinyPokeImg.src = shinyPokeImgURL;
}

export { GetPokeData, GetPokePic }