import { useState } from "react";
import Cards from "./Cards";

const Search = ({ pokemonData }) => {
    const [searchTerm, setSearchTerm] = useState("");

    return (
        <div>
            <input
                type="text"
                placeholder="Search..."
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div>
                {pokemonData
                    .filter((val) => {
                        if (searchTerm === "") {
                            return val;
                        } else if (val.data.name.includes(searchTerm)) {
                            return val;
                        }
                    })
                    .map((pokemonData) => (
                        <Cards pokemonData={pokemonData.data} />
                    ))}
            </div>
        </div>
    );
};

export default Search;
