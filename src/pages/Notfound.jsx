import { Link } from "react-router-dom";

const Notfound = () => {
    return (
        <div className="max-w-7xl mx-auto container px-4 py-40 sm:px-40">
            <div className="flex flex-col gap-6 max-w-lg">
                <h1 className="text-2xl sm:text-4xl font-semibold">Sorry, the page you were looking for was not found.</h1>
                <Link to="/" className="bg-[#161616] rounded-lg hover:bg-opacity-80 text-white py-2 px-10 md:px-14 text-base md:text-lg font-bold leading-8 w-fit">
                    Find your van
                </Link>
            </div>
        </div>
    );
}

export default Notfound;