import { Link } from "react-router-dom";
import { useState } from "react";

import Navbar from "../Navbar";
import ScrollToTop from "../ScrollToTop";
import Loading from "../Loading";
import Cards from "../Cards";

const Home = ({ pokemonData, loading, expandPokemonList }) => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    return (
        <>
            <Navbar pokemonData={pokemonData} handleSearch={handleSearch} />
            <ScrollToTop />
            {loading ? (
                <Loading />
            ) : (
                <div className="max-w-8xl py-0 px-100 m-auto ">
                    <div className="grid grid-cols-auto mx-0 mt-32 mb-16 gap-5">
                        {pokemonData
                            .filter((val) => {
                                if (searchTerm === "") {
                                    return val;
                                } else if (
                                    val.data.name.includes(searchTerm) ||
                                    val.data.name
                                        .toLowerCase()
                                        .includes(searchTerm.toLowerCase())
                                ) {
                                    return val;
                                }
                            })
                            .map((pokemonData) => (
                                <Link to={`/pokemon/${pokemonData.data.name}`}>
                                    <Cards pokemonData={pokemonData.data} />
                                </Link>
                            ))}
                    </div>
                    <div className="text-center mb-12">
                        <button
                            className="bg-darkGray hover:bg-black text-white rounded cursor-pointer py-3 px-12"
                            onClick={() => expandPokemonList()}
                        >
                            Load More
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default Home;
