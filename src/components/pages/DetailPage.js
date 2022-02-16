import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useHistory } from "react-router-dom";
import axios from "axios";

import Loading from "../Loading";
import Basics from "../Basics";
import Evolution from "../Evolution";
import Stats from "../Stats";
import Moves from "../Moves";

const DetailPage = ({ loading, setLoading }) => {
    const [pokemonDetails, setPokemonDetails] = useState([]);
    const { name } = useParams();
    const history = useHistory();

    const handleHistory = () => history.goBack();

    const getPokemonDetails = async () => {
        const res = await axios.get(
            `https://pokeapi.co/api/v2/pokemon/${name}`
        );
        setPokemonDetails(res.data);
        setLoading(false);
    };

    const capitalizeFirstLetter = (str) => {
        let words = str.match(/([^-]+)/g);
        words.forEach((word, i) => {
            words[i] = word[0].toUpperCase() + word.slice(1);
        });
        return words.join(" ");
    };

    useEffect(() => {
        getPokemonDetails();
    }, []);

    return (
        <>
            {pokemonDetails != 0 && (
                <div className="flex w-full h-full items-center justify-center">
                    {loading ? (
                        <Loading />
                    ) : (
                        <div className="flex flex-col 3xl:flex-row 4xl:flex-row sm:w-full md:w-full lg:w-full xl:w-4/5 2xl:w-8/12 3xl:w-11/12 4xl:w-10/12 xl:items-center 2xl:items-center xl:justify-center 2xl:justify-center 4xl:my-12 my-6 gap-5 xl:shadow-xl 2xl:shadow-xl">
                            {/* {LEFT} */}
                            <div className="flex flex-col w-full 3xl:w-5/12 4xl:w-5/12 overflow-y-hidden rounded-lg 3xl:border-8 4xl:border-8 border-white hover:border-black 3xl:shadow-xl 4xl:shadow-xl transform transition-all ease-in duration-300 cursor-pointer hover:scale-110 3xl:hover:scale-100 4xl:hover:scale-100">
                                <img
                                    className="w-auto sm:h-72 h-96 3xl:h-full 4xl:h-full sm:p-0 sm:pt-6 p-24 md:py-4 lg:py-4 xl:py-4 2xl:py-4"
                                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonDetails.id}.svg`}
                                    alt={pokemonDetails.name}
                                />
                            </div>
                            {/* {RIGHT} */}
                            <div className="flex flex-col w-full 3xl:w-7/12 4xl:w-7/12 rounded-lg shadow-xl sm:shadow-none md:shadow-none lg:shadow-none">
                                <div className="flex sm:flex-col md:flex-col lg:flex-col flex-row w-auto pt-10 pb-7 px-24 sm:px-14 lg:px-36">
                                    <Basics
                                        pokemonDetails={pokemonDetails}
                                        capitalizeFirstLetter={
                                            capitalizeFirstLetter
                                        }
                                    />
                                    <Evolution
                                        pokemonDetails={pokemonDetails}
                                    />
                                </div>
                                <Stats
                                    pokemonDetails={pokemonDetails}
                                    capitalizeFirstLetter={
                                        capitalizeFirstLetter
                                    }
                                />
                                <Moves
                                    pokemonDetails={pokemonDetails}
                                    capitalizeFirstLetter={
                                        capitalizeFirstLetter
                                    }
                                />
                                <div className="text-center mt-7 mb-14">
                                    <button
                                        className="bg-darkGray text-white rounded cursor-pointer text-base py-3 px-12 hover:bg-black"
                                        onClick={handleHistory}
                                    >
                                        Back to the Pokedex
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            )}
        </>
    );
};

export default DetailPage;
