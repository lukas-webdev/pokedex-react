const Cards = ({ pokemonData }) => {
    const getTypeColor = (type) => {
        let backgroundColor = "";
        let boxShadow = "";
        switch (type) {
            case "grass":
                backgroundColor = "#9bcc50";
                boxShadow = "1px 1px 6px 0px #9bcc50";
                break;
            case "poison":
                backgroundColor = "#b97fc9";
                boxShadow = "1px 1px 6px 0px #b97fc9";
                break;
            case "fire":
                backgroundColor = "#fd7d24";
                boxShadow = "1px 1px 6px 0px #fd7d24";
                break;
            case "flying":
                backgroundColor = "#3dc7ef";
                boxShadow = "1px 1px 6px 0px #3dc7ef";
                break;
            case "water":
                backgroundColor = "#4592c4";
                boxShadow = "1px 1px 6px 0px #4592c4";
                break;
            case "bug":
                backgroundColor = "#729f3f";
                boxShadow = "1px 1px 6px 0px #729f3f";
                break;
            case "normal":
                backgroundColor = "#a4acaf";
                boxShadow = "1px 1px 6px 0px #a4acaf";
                break;
            case "electric":
                backgroundColor = "#eed535";
                boxShadow = "1px 1px 6px 0px #eed535";
                break;
            case "ground":
                backgroundColor = "#ab9842";
                boxShadow = "1px 1px 6px 0px #ab9842";
                break;
            case "fairy":
                backgroundColor = "#fdb9e9";
                boxShadow = "1px 1px 6px 0px #fdb9e9";
                break;
            case "fighting":
                backgroundColor = "#d56723";
                boxShadow = "1px 1px 6px 0px #d56723";
                break;
            case "psychic":
                backgroundColor = "#f366b9";
                boxShadow = "1px 1px 6px 0px #f366b9";
                break;
            case "rock":
                backgroundColor = "#a38c21";
                boxShadow = "1px 1px 6px 0px #a38c21";
                break;
            case "steel":
                backgroundColor = "#9eb7b8";
                boxShadow = "1px 1px 6px 0px #9eb7b8";
                break;
            case "ghost":
                backgroundColor = "#7b62a3";
                boxShadow = "1px 1px 6px 0px #7b62a3";
                break;
            case "ice":
                backgroundColor = "#51c4e7";
                boxShadow = "1px 1px 6px 0px #51c4e7";
                break;
            case "dragon":
                backgroundColor = "#f16e57";
                boxShadow = "1px 1px 6px 0px #f16e57";
                break;

            default:
                backgroundColor = "#000";
                break;
        }
        return { backgroundColor, boxShadow };
    };

    return (
        <>
            <div className="flex flex-col h-80 rounded-md border-8 border-transparent hover:border-darkGray cursor-pointer shadow-lg transform transition-all duration-200 ease-in hover:scale-105">
                <img
                    className="h-64 bg-gray-50 px-12 py-6 border border-gray-300 border-opacity-10"
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonData.id}.svg`}
                    alt={pokemonData.name}
                />
                <div className="flex items-center my-2 mx-auto ">
                    <p className="text-gray-500 opacity-90 text-xl font-normal mr-2">
                        {" "}
                        #{pokemonData.id}
                    </p>
                    <h1 className="text-xl font-semibold mr-3">
                        {pokemonData.name.charAt(0).toUpperCase() +
                            pokemonData.name.slice(1)}
                    </h1>
                    <div className="flex gap-1">
                        {pokemonData.types.map((types, id) => (
                            <p
                                key={id}
                                className="align-center text-white text-xs font-semibold rounded py-1 px-2 "
                                style={getTypeColor(types.type.name)}
                            >
                                {types.type.name.charAt(0).toUpperCase() +
                                    types.type.name.slice(1)}
                            </p>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Cards;
