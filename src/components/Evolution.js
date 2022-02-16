import { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";

const Evolution = ({ pokemonDetails }) => {
    const [evolutionChain, setEvolutionChain] = useState([]);
    const { name } = useParams();
    const evoArr = [];

    const getEvolutionChain = async (id) => {
        const res = await axios.get(
            `https://pokeapi.co/api/v2/evolution-chain/${id}/`
        );
        let evoChain = [];
        let evoData = res.data.chain;

        do {
            evoChain.push(evoData.species.name);
            evoData = evoData["evolves_to"][0];
        } while (evoData && evoData.hasOwnProperty("evolves_to"));
        setEvolutionChain(evoChain);
    };

    for (let i = 0; i < evolutionChain.length; i++) {
        if (name === evolutionChain[i]) {
            evoArr.push(evolutionChain);
        }
    }

    useEffect(() => {
        let i = 1;
        getEvolutionChain(i);
    }, []);

    return (
        <>
            {evoArr != 0 && pokemonDetails != 0 && evolutionChain != 0 && (
                <div className="flex sm:w-full md:w-full lg:w-full w-6/12 self-end overflow-x-auto sm:mt-7 sm:mb-2 md:mt-7 md:mb-2 lg:mt-7 lg:mb-2 sm:pl-0 md:pl-0 lg:pl-0 pl-4">
                    <div className="flex flex-1 gap-1">
                        {evoArr.map((p, id) => (
                            <>
                                {evoArr[0][0] === name && (
                                    <>
                                        <div
                                            key={id}
                                            className="flex flex-col sm:w-1/3 w-full hover:w-140/100 sm:h-44 h-40 bg-gray-100 hover:bg-black hover:text-white justify-center items-center self-end sm:p-5 lg:p-6 rounded cursor-pointer transition-all duration-300 ease-in"
                                        >
                                            <img
                                                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonDetails.id}.svg`}
                                                className="flex md:w-2/5 lg:w-2/5 w-7/12 my-1"
                                                alt=""
                                            />
                                            <div class="text-md font-light -mb-1 mt-1">
                                                #
                                                {`${pokemonDetails.id}`.padStart(
                                                    3,
                                                    "0"
                                                )}
                                            </div>
                                            <div class="text-sm font-semibold uppercase tracking-tight pb-1">
                                                <p>{p[0]}</p>
                                            </div>
                                        </div>
                                        <div
                                            key={id}
                                            className="flex flex-col sm:w-1/3 w-full hover:w-140/100 sm:h-44 h-40 bg-gray-100 hover:bg-black hover:text-white justify-center items-center self-end sm:p-5 lg:p-6 rounded cursor-pointer transition-all duration-300 ease-in"
                                        >
                                            <img
                                                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
                                                    pokemonDetails.id + 1
                                                }.svg`}
                                                className="flex md:w-2/5 lg:w-2/5 w-7/12 my-1"
                                                alt=""
                                            />
                                            <div class="text-md font-light -mb-1 mt-1">
                                                #
                                                {`${
                                                    pokemonDetails.id + 1
                                                }`.padStart(3, "0")}
                                            </div>
                                            <div class="text-sm font-semibold uppercase tracking-tight pb-1">
                                                <p>{p[1]}</p>
                                            </div>
                                        </div>
                                        <div
                                            key={id}
                                            className="flex flex-col sm:w-1/3 w-full hover:w-140/100 sm:h-44 h-40 bg-gray-100 hover:bg-black hover:text-white justify-center items-center self-end sm:p-5 lg:p-6 rounded cursor-pointer transition-all duration-300 ease-in"
                                        >
                                            <img
                                                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
                                                    pokemonDetails.id + 2
                                                }.svg`}
                                                className="flex md:w-2/5 lg:w-2/5 w-7/12 my-1"
                                                alt=""
                                            />
                                            <div class="text-md font-light -mb-1 mt-1">
                                                #
                                                {`${
                                                    pokemonDetails.id + 2
                                                }`.padStart(3, "0")}
                                            </div>
                                            <div class="text-sm font-semibold uppercase tracking-tight pb-1">
                                                <p>{p[2]}</p>
                                            </div>
                                        </div>
                                    </>
                                )}

                                {evoArr[0][1] === name && (
                                    <>
                                        <div
                                            key={id}
                                            className="flex flex-col sm:w-1/3 w-full hover:w-140/100 sm:h-44 h-40 bg-gray-100 hover:bg-black hover:text-white justify-center items-center self-end sm:p-5 lg:p-6 rounded cursor-pointer transition-all duration-300 ease-in"
                                        >
                                            <img
                                                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
                                                    pokemonDetails.id - 1
                                                }.svg`}
                                                className="flex md:w-2/5 lg:w-2/5 w-7/12 my-1"
                                                alt=""
                                            />
                                            <div class="text-md font-light -mb-1 mt-1">
                                                #
                                                {`${
                                                    pokemonDetails.id - 1
                                                }`.padStart(3, "0")}
                                            </div>
                                            <div class="text-sm font-semibold uppercase tracking-tight pb-1">
                                                <p>{p[0]}</p>
                                            </div>
                                        </div>
                                        <div
                                            key={id}
                                            className="flex flex-col sm:w-1/3 w-full hover:w-140/100 sm:h-44 h-40 bg-gray-100 hover:bg-black hover:text-white justify-center items-center self-end sm:p-5 lg:p-6 rounded cursor-pointer transition-all duration-300 ease-in"
                                        >
                                            <img
                                                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonDetails.id}.svg`}
                                                className="flex md:w-2/5 lg:w-2/5 w-7/12 my-1"
                                                alt=""
                                            />
                                            <div class="text-md font-light -mb-1 mt-1">
                                                #
                                                {`${pokemonDetails.id}`.padStart(
                                                    3,
                                                    "0"
                                                )}
                                            </div>
                                            <div class="text-sm font-semibold uppercase tracking-tight pb-1">
                                                <p>{p[1]}</p>
                                            </div>
                                        </div>
                                        <div
                                            key={id}
                                            className="flex flex-col sm:w-1/3 w-full hover:w-140/100 sm:h-44 h-40 bg-gray-100 hover:bg-black hover:text-white justify-center items-center self-end sm:p-5 lg:p-6 rounded cursor-pointer transition-all duration-300 ease-in"
                                        >
                                            <img
                                                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
                                                    pokemonDetails.id + 1
                                                }.svg`}
                                                className="flex md:w-2/5 lg:w-2/5 w-7/12 my-1"
                                                alt=""
                                            />
                                            <div class="text-md font-light -mb-1 mt-1">
                                                #
                                                {`${
                                                    pokemonDetails.id + 1
                                                }`.padStart(3, "0")}
                                            </div>
                                            <div class="text-sm font-semibold uppercase tracking-tight pb-1">
                                                <p>{p[2]}</p>
                                            </div>
                                        </div>
                                    </>
                                )}

                                {evoArr[0][2] === name && (
                                    <>
                                        <div
                                            key={id}
                                            className="flex flex-col sm:w-1/3 w-full hover:w-140/100 sm:h-44 h-40 bg-gray-100 hover:bg-black hover:text-white justify-center items-center self-end sm:p-5 lg:p-6 rounded cursor-pointer transition-all duration-300 ease-in"
                                        >
                                            <img
                                                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
                                                    pokemonDetails.id - 2
                                                }.svg`}
                                                className="flex md:w-2/5 lg:w-2/5 w-7/12 my-1"
                                                alt=""
                                            />
                                            <div class="text-md font-light -mb-1 mt-1">
                                                #
                                                {`${
                                                    pokemonDetails.id - 2
                                                }`.padStart(3, "0")}
                                            </div>
                                            <div class="text-sm font-semibold uppercase tracking-tight pb-1">
                                                <p>{p[0]}</p>
                                            </div>
                                        </div>
                                        <div
                                            key={id}
                                            className="flex flex-col sm:w-1/3 w-full hover:w-140/100 sm:h-44 h-40 bg-gray-100 hover:bg-black hover:text-white justify-center items-center self-end sm:p-5 lg:p-6 rounded cursor-pointer transition-all duration-300 ease-in"
                                        >
                                            <img
                                                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
                                                    pokemonDetails.id - 1
                                                }.svg`}
                                                className="flex md:w-2/5 lg:w-2/5 w-7/12 my-1"
                                                alt=""
                                            />
                                            <div class="text-md font-light -mb-1 mt-1">
                                                #
                                                {`${
                                                    pokemonDetails.id - 1
                                                }`.padStart(3, "0")}
                                            </div>
                                            <div class="text-sm font-semibold uppercase tracking-tight pb-1">
                                                <p>{p[1]}</p>
                                            </div>
                                        </div>
                                        <div
                                            key={id}
                                            className="flex flex-col sm:w-1/3 w-full hover:w-140/100 sm:h-44 h-40 bg-gray-100 hover:bg-black hover:text-white justify-center items-center self-end sm:p-5 lg:p-6 rounded cursor-pointer transition-all duration-300 ease-in"
                                        >
                                            <img
                                                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonDetails.id}.svg`}
                                                className="flex md:w-2/5 lg:w-2/5 w-7/12 my-1"
                                                alt=""
                                            />
                                            <div class="text-md font-light -mb-1 mt-1">
                                                #
                                                {`${pokemonDetails.id}`.padStart(
                                                    3,
                                                    "0"
                                                )}
                                            </div>
                                            <div class="text-sm font-semibold uppercase tracking-tight pb-1">
                                                <p>{p[2]}</p>
                                            </div>
                                        </div>
                                    </>
                                )}
                            </>
                        ))}
                    </div>
                </div>
            )}
        </>
    );
};

export default Evolution;
