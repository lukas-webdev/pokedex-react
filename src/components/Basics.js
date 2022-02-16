const Basics = ({ pokemonDetails, capitalizeFirstLetter }) => {
    return (
        <div className="sm:w-full md:w-full lg:w-full w-6/12 sm:mb-5 md:mb-5 lg:mb-5 leading-normal">
            <div className="flex text-2xl font-semibold mb-4">
                <div className="w-20 text-black font-normal mr-2">
                    #{`${pokemonDetails.id}`.padStart(3, "0")}{" "}
                </div>
                <div>{capitalizeFirstLetter(`${pokemonDetails.name}`)}</div>
            </div>
            <div className="flex items-center">
                <div className="w-20 uppercase font-semibold text-lg mr-2">
                    Type:
                </div>
                {pokemonDetails.types.map((types, id) => (
                    <button
                        key={id}
                        className="bg-darkGray hover:bg-black text-white text-xs font-semibold text-center rounded py-1 px-2 mr-1"
                    >
                        {capitalizeFirstLetter(`${types.type.name}`)}
                    </button>
                ))}
            </div>

            <div className="flex items-center">
                <div className="w-20 uppercase font-semibold text-lg mr-2">
                    Ability:
                </div>
                {pokemonDetails.abilities.map((abilities, id) => (
                    <button
                        key={id}
                        className="bg-darkGray hover:bg-black text-white text-xs font-semibold text-center rounded py-1 px-2 mr-1 break-words"
                    >
                        {capitalizeFirstLetter(`${abilities.ability.name}`)}
                    </button>
                ))}
            </div>
            <div className="flex items-center">
                <div className="w-20 uppercase font-semibold text-lg mr-2">
                    Height:
                </div>
                <div>{pokemonDetails.height} m</div>
            </div>
            <div className="flex items-center">
                <div className="w-20 uppercase font-semibold text-lg mr-2">
                    Weight:
                </div>
                <div>{pokemonDetails.weight} kg</div>
            </div>
        </div>
    );
};

export default Basics;
