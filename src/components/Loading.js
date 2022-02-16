import { CircularProgress } from "@material-ui/core";

const Loading = () => {
    return (
        <div className="flex flex-col w-screen h-screen items-center justify-center">
            <CircularProgress style={{ color: "black" }} />
            <h1 className="uppercase font-bold mt-4">Loading ...</h1>
        </div>
    );
};

export default Loading;
