import { useEffect, useState } from "react";
import { Link, NavLink, Outlet, useParams } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa"


const VanDetailLayout = () => {
    const params = useParams()
    const [van, setVan] = useState(null)

    useEffect(() => {
        fetch(`/api/host/vans/${params.id}`)
            .then(response => response.json())
            .then(data => setVan(data.vans))
    }, [params.id])

    const vanData = van ? van[0] : null

    return (
        <main className="max-w-7xl mx-auto container px-4 xl:px-0">
            <Link to=".." relative="path">
                <h1 className="flex gap-2 text-[#4D4D4D] text-base sm:text-lg font-semibold leading-6 underline hover:no-underline cursor-pointer items-center"><FaArrowLeft />Back to all vans</h1>
            </Link>
            <div className="bg-white flex flex-col gap-4 p-11 my-10">
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 h-60 items-start sm:items-end">
                    <img src={vanData?.imageUrl} alt="vans" className="h-full rounded-md object-cover" />
                    <div className="flex flex-col gap-4 sm:gap-6">
                        <button className={`text-[#FFEAD0] font-semibold rounded-md text-base sm:text-lg py-2 px-4 items-start
                             w-40 hover:bg-opacity-80 ${vanData?.type === "rugged" ? "bg-[#115E59]" : vanData?.type === "simple" ?
                                "bg-[#E17654]" : "bg-[#161616]"}`}>
                            {vanData?.type}
                        </button>
                        <h1 className="text-[#161616] font-semibold text-xl sm:text-2xl">{vanData?.name}</h1>
                        <p className="text-[#161616] text-lg flex items-center"><span className="font-semibold text-xl sm:text-2xl">
                            ${vanData?.price}</span>/day</p>
                    </div>
                </div>
                <ul className="flex flex-wrap gap-4 sm:gap-8 text-[#4D4D4D] text-lg sm:text-xl font-semibold leading-6 cursor-pointer pt-44">
                    <NavLink to="." end className={({ isActive }) => isActive ? "text-[#161616] underline" : ""}>
                        <li className="hover:text-[#161616] hover:underline">Details</li>
                    </NavLink>
                    <NavLink to="price" className={({ isActive }) => isActive ? "text-[#161616] underline" : ""}>
                        <li className="hover:text-[#161616] hover:underline">Pricing</li>
                    </NavLink>
                    <NavLink to="photos" className={({ isActive }) => isActive ? "text-[#161616] underline" : ""}>
                        <li className="hover:text-[#161616] hover:underline">photos</li>
                    </NavLink>
                </ul>
                <Outlet context={vanData} />
            </div>
        </main>
    );
}

export default VanDetailLayout;