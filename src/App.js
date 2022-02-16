import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

import Home from "./components/pages/Home";
import DetailPage from "./components/pages/DetailPage";

const App = () => {
    const [pokemonData, setPokemonData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [prevValue, setPrevValue] = useState(0);

    const getPokemonData = async (name) => {
        try {
            const res = await axios.get(
                `https://pokeapi.co/api/v2/pokemon/${name}`
            );
            return res;
        } catch (err) {
            console.log(`ERROR: ${err}`);
        }
    };

    const getPokemonList = async () => {
        let pokemonArr = [];
        const newValue = prevValue + 20;

        for (let i = 1; i <= newValue; i++) {
            pokemonArr.push(await getPokemonData(i));
        }
        setPokemonData(pokemonArr);
        setLoading(false);
        setPrevValue(newValue);
    };

    const expandPokemonList = async () => {
        let pokemonArr = [];
        const newValue = prevValue + 20;

        for (let i = 1; i <= newValue; i++) {
            pokemonArr.push(await getPokemonData(i));
        }
        setPokemonData(pokemonArr);
        setLoading(false);
        setPrevValue(newValue);
    };

    useEffect(() => {
        getPokemonList();
    }, []);

    return (
        <Router>
            <Switch>
                <Route path="/" exact>
                    <Home
                        pokemonData={pokemonData}
                        loading={loading}
                        expandPokemonList={expandPokemonList}
                    />
                </Route>
                <Route path="/pokemon/:name" exact>
                    <DetailPage loading={loading} setLoading={setLoading} />
                </Route>
            </Switch>
        </Router>
    );
};

export default App;
