const Stats = ({ pokemonDetails, capitalizeFirstLetter }) => {
    return (
        <div className="grid grid-cols-6 gap-8 justify-center sm:px-14 lg:px-36 px-24 py-7 sm:gap-2 md:gap-5 lg:gap-6">
            {pokemonDetails.stats.map((stats, id) => (
                <div key={id} className="flex flex-col">
                    <div className="grid h-40 bg-gray-100 rounded">
                        <div
                            className="grid w-11/12 bg-darkGray hover:bg-black justify-self-center self-end rounded mb-0.5 cursor-pointer transition-all duration-300 ease-in"
                            style={{ height: `${stats.base_stat}px` }}
                        >
                            <div class="justify-self-center self-end text-sm font-semibold text-white pb-1">
                                {stats.base_stat}
                            </div>
                        </div>
                    </div>
                    <span className="text-center text-xs font-semibold sm:font-medium">
                        {capitalizeFirstLetter(`${stats.stat.name}`)}
                    </span>
                </div>
            ))}
        </div>
    );
};

export default Stats;
