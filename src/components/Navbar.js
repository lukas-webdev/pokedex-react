import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

import pokemonLogo from "../assets/images/pokemonLogo.png";
import pokemon from "../assets/images/pokemon-logo.png";
import pokemonGo from "../assets/images/pokemon-go-logo.png";

const Navbar = ({ pokemonData, handleSearch }) => {
    return (
        <nav className="flex w-screen h-20 bg-white items-center justify-center fixed top-0 left-0 z-50 shadow-md">
            <div className="flex sm:w-4/5 md:w-4/5 lg:w-4/5 w-10/12 items-center justify-center">
                <div className="flex min-w-max cursor-pointer">
                    <Link to="/" className="flex">
                        <img
                            src={pokemonLogo}
                            alt=""
                            className="flex h-9 items-center justify-center mr-3 mt-px transform hover:rotate-180 duration-500"
                        />
                        <p className="text-4xl font-bold text-darkGray hover:text-black sm:hidden">
                            POKEDEX
                        </p>
                    </Link>
                </div>
                <SearchBar
                    pokemonData={pokemonData}
                    handleSearch={handleSearch}
                />
                <ul className="flex gap-8 sm:hidden md:hidden lg:hidden xl:hidden">
                    <li className="flex cursor-pointer">
                        <a href="https://www.pokemon.com">
                            <img
                                src={pokemon}
                                alt=""
                                className="h-9 transform transition-all duration-100 ease-linear hover:scale-110"
                            />
                        </a>
                    </li>
                    <li className="flex cursor-pointer">
                        <a href="https://www.pokemongolive.com">
                            <img
                                src={pokemonGo}
                                alt=""
                                className="h-9 transform transition-all duration-100 ease-linear hover:scale-110"
                            />
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
