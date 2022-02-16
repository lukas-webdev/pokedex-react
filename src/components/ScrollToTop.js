import { useState, useEffect } from "react";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";

const ScrollToTop = () => {
    const [show, setShow] = useState(false);

    const handleScroll = () => {
        if (window.pageYOffset > 200) {
            setShow(true);
        } else {
            setShow(false);
        }
    };

    const handleClick = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            {show && (
                <div
                    className="flex w-12 h-12 bg-darkGray hover:bg-black z-50 cursor-pointer fixed bottom-4 right-4 rounded animate-fadeIn"
                    onClick={handleClick}
                >
                    <ExpandLessIcon
                        style={{ fontSize: 45 }}
                        className="m-auto text-white"
                    />
                </div>
            )}
        </>
    );
};

export default ScrollToTop;
