import SearchIcon from "@material-ui/icons/Search";

const SearchBar = ({ handleSearch }) => {
    return (
        <form className="flex sm:w-full md:w-full lg:w-full xl:w-6/12 w-2/5 sm:h-9 h-10 items-center sm:mr-0 sm:ml-4 md:mr-0 md:ml-12 lg:mr-0 lg:ml-12 xl:mr-0 mx-24 rounded border border-darkGray">
            <input
                className="w-full h-full sm:py-0 sm:px-2 px-4 rounded-l placeholder-gray-500 opacity-40 placeholder-opacity-75 focus:placeholder-transparent focus:shadow-md focus:opacity-100"
                type="text"
                placeholder="Search ..."
                onChange={handleSearch}
            />
            <button
                type="submit"
                className="sm:w-16 w-28 sm:h-9 h-10 bg-darkGray hover:bg-black rounded-r cursor-pointer text-center text-white"
            >
                <SearchIcon style={{ fontSize: 30 }} />
            </button>
        </form>
    );
};

export default SearchBar;
