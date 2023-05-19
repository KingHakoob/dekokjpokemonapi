import { GetPokeData, GetPokePic } from "../Service/DataService";
import { useState, useEffect } from "react";
import { Container, Row, Col, Dropdown } from "react-bootstrap";
import './Pokemon.css';

export default function Pokemon() {
    const [search, setSearch] = useState('pikachu');
    const [name, setName] = useState('');
    const [index, setIndex] = useState(0);
    const [image, setImage] = useState('');
    const [types, setTypes] = useState([]);
    const [abilites, setAbilities] = useState('');
    const [moves, setMoves] = useState([]);


    const GetPokemon = async (search) => {
        let pokeData = await GetPokeData(search);
        console.log(pokeData);

        setName(pokeData.name);
        setIndex(pokeData.id);
        setTypes(pokeData.types.map(type => type.type.name).join(', '));
        setAbilities(pokeData.abilities.map(abilities => abilities.ability.name).join(', '));
        setMoves(pokeData.moves);
        await GetPokemonPic(pokeData.id);
    }

    const GetPokemonPic = async (input) => {
        setImage((await GetPokePic(input)));
    }

    useEffect(() => {
        GetPokemon(search);
    }, [])

    return (
        <div className="pokedex">
            <Container>
                <Row>
                    <Col>
                        <Row>
                            <Col>
                                <input type="text" placeholder="Enter Pokemon Name Or Index Here" onChange={(e) => setSearch(e.target.value)} />
                                <button onClick={() => GetPokemon(search)}>Press Me To Search</button>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <img src={image} alt='Pokemon' />
                            </Col>
                        </Row>
                    </Col>
                    <Col>
                        {/* <h1>Pokedex</h1>
                        <h1>Name: {name}</h1> */}
                        <div className="d-flex justify-content-around pt-4">
                            <h1 className="p-2">{index}</h1>
                            <h1 className="pt-1">{types}</h1>
                        </div>
                        <h1 className="p-5">Abilities: {abilites}</h1>
                        <Dropdown className="movesDropDown">
                            <Dropdown.Toggle variant="" id="dropdown-moves">
                                Moves
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                {
                                    moves.map((move, idx) => {
                                        return (
                                            <Dropdown.Item key={idx}>{move.move.name}</Dropdown.Item>
                                        )
                                    })
                                }
                            </Dropdown.Menu>
                        </Dropdown></Col>
                </Row>
            </Container>

        </div>
    );
}

// Name, Index, Type, Locations, Evolutions, Abilities, Moves, Picture