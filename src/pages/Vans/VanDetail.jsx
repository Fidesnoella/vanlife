import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa"

const VanDetail = () => {
    const params = useParams()
    const [van, setVan] = useState(null)

    useEffect(() => {
        fetch(`/api/vans/${params.id}`)
            .then(reponse => reponse.json())
            .then(data => setVan(data.vans))
    }, [params.id])

    return (
        <main className="max-w-7xl container mx-auto py-20">
            {van ?
                <div className="flex flex-col w-full mx-auto gap-6 max-w-[70rem] px-4">
                    <Link to={"/vans"}>
                        <h1 className="flex gap-2 text-[#4D4D4D] text-base sm:text-lg font-semibold leading-6 underline hover:no-underline cursor-pointer items-center"><FaArrowLeft />Back to all vans</h1>
                    </Link>
                    <img src={van.imageUrl} alt="vans" className="h-[32rem] rounded-md object-cover" />
                    <button className={`text-[#FFEAD0] font-semibold rounded-md text-base sm:text-lg py-2 px-4 items-start
                     w-40 hover:bg-opacity-80 ${van.type === "rugged" ? "bg-[#115E59]" : van.type === "simple" ? "bg-[#E17654]" : "bg-[#161616]"}`}>{van.type.charAt(0).toUpperCase().concat(van.type.slice(1))}</button>
                    <h1 className="text-[#161616] font-semibold text-xl sm:text-2xl">{van.name}</h1>
                    <p className="text-[#161616] text-lg flex items-center"><span className="font-semibold text-xl sm:text-2xl">${van.price}</span>/day</p>
                    <p className="text-[#161616] text-lg flex flex-col items-end max-w-2xl">{van.description}</p>
                    <button className="bg-[#FF8C38] rounded-lg hover:bg-[#f8a56b] py-2 px-10 md:px-16 text-base md:text-lg font-bold leading-8 text-white w-full sm:w-fit">Rent this van</button>
                </div>
                : <h1 className="px-4">Loading...</h1>
            }
        </main>
    );
}

export default VanDetail;