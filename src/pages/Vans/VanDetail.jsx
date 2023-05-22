import { Link, useLocation, useLoaderData } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa"
import { getVan } from "../../api";

export function loader({ params }) {
    return getVan(params.id)
}

const VanDetail = () => {
    const location = useLocation()
    const van = useLoaderData()

    const search = location.state?.search || ""
    const type = location.state?.type || "all"

    return (
        <main className="max-w-7xl container mx-auto py-20">
            <div className="flex flex-col w-full mx-auto gap-6 max-w-[70rem] px-4">
                <Link to={`..${search}`} relative="path">
                    <h1 className="flex gap-2 text-[#4D4D4D] text-base sm:text-lg font-semibold leading-6 underline hover:no-underline cursor-pointer items-center"><FaArrowLeft />
                        Back to {type} vans
                    </h1>
                </Link>
                <img src={van.imageUrl} alt="vans" className="h-[32rem] rounded-md object-cover" />
                <button className={`text-[#FFEAD0] font-semibold rounded-md text-base sm:text-lg py-2 px-4 items-start
                     w-40 hover:bg-opacity-80 ${van.type === "rugged" ? "bg-[#115E59]" : van.type === "simple" ? "bg-[#E17654]" : "bg-[#161616]"}`}>{van.type.charAt(0).toUpperCase().concat(van.type.slice(1))}</button>
                <h1 className="text-[#161616] font-semibold text-xl sm:text-2xl">{van.name}</h1>
                <p className="text-[#161616] text-lg flex items-center"><span className="font-semibold text-xl sm:text-2xl">${van.price}</span>/day</p>
                <p className="text-[#161616] text-lg flex flex-col items-end max-w-2xl">{van.description}</p>
                <button className="bg-[#FF8C38] rounded-lg hover:bg-[#f8a56b] py-2 px-10 md:px-16 text-base md:text-lg font-bold leading-8 text-white w-full sm:w-fit">Rent this van</button>
            </div>
        </main>
    );
}

export default VanDetail;