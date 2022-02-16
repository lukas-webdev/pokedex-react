const Moves = ({ pokemonDetails, capitalizeFirstLetter }) => {
    return (
        <div className="sm:px-14 lg:px-36 px-24 py-7">
            <div className="h-36 text-sm overflow-y-scroll overflow-x-auto">
                <table className="w-full">
                    <tr className="bg-darkGray sticky top-0 text-center text-white">
                        <th className="py-1 px-2">Lvl.</th>
                        <th className="py-1 px-2">Move</th>
                        <th className="py-1 px-2">Type</th>
                        <th className="py-1 px-2">Cat.</th>
                        <th className="py-1 px-2">Power</th>
                        <th className="py-1 px-2">Acc.</th>
                    </tr>
                    <tbody>
                        {pokemonDetails.moves.map((p, id) => (
                            <tr
                                key={id}
                                className="bg-gray-100 hover:bg-gray-200 text-center cursor-pointer"
                            >
                                <td></td>
                                <td className="px-4 truncate">
                                    {capitalizeFirstLetter(`${p.move.name}`)}
                                </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Moves;
