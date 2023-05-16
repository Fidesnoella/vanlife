import { useState } from "react";
import VansCard from "../../components/cards/Van"
import { Link, useLoaderData, useSearchParams } from "react-router-dom";
import { getVans } from "../../../api";

export function loader() {
    return getVans()
}

const Vans = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const [error, setError] = useState(null)
    const vans = useLoaderData()

    const typefFilter = searchParams.get("type")

    const displayedVans = typefFilter ? vans.filter(van => van.type === typefFilter) : vans;

    if (typefFilter && displayedVans.length === 0) {
        return (
            <div className="p-20 flex flex-col gap-5" >
                <p className="text-2xl">No vans found for the specified type</p>
                <Link to="/vans" className="bg-[#FF8C38] rounded-lg hover:bg-[#f8a56b] py-2 
                px-10 md:px-14 text-base md:text-lg font-bold leading-8 w-fit">Go back to vans</Link>
            </div >
        )
    }

    function handleFilterChange(key, value) {
        setSearchParams(prevParams => {
            if (value === null) {
                prevParams.delete(key)
            } else {
                prevParams.set(key, value)
            }
            return prevParams
        })
    }

    if (error) {
        return <h1 className="max-w-7xl mx-auto  container p-20 text-2xl font-bold">There was an error: {error.message}</h1>
    }

    return (
        <main className="bg-[#FFF7ED] h-full">
            <div className="max-w-[70rem] mx-auto container py-20 px-4">
                <div className="flex flex-col gap-y-8 ">
                    <h1 className="text-3xl sm:text-4xl font-bold leading-10">Explore our van options</h1>
                    <div className="flex flex-wrap gap-6 items-center">
                        <button className={`${typefFilter === "simple" ? "bg-[#E17654]" : "bg-[#FFEAD0]"} hover:bg-[#E17654] hover:text-[#FFEAD0] rounded-md text-[#4D4D4D] font-medium text-base sm:text-lg  px-8 py-2`} onClick={() => handleFilterChange("type", "simple")}>Simple</button>

                        <button className={`${typefFilter === "luxury" ? "bg-[#161616] text-[#FFEAD0]" : "bg-[#FFEAD0]"} hover:bg-[#161616] hover:text-[#FFEAD0] rounded-md text-[#4D4D4D] font-medium  text-base sm:text-lg  px-8 py-2`} onClick={() => handleFilterChange("type", "luxury")}>Luxury</button>

                        <button className={`${typefFilter === "rugged" ? "bg-[#115E59] text-[#FFEAD0]" : "bg-[#FFEAD0]"}  hover:bg-[#115E59] hover:text-[#FFEAD0] rounded-md text-[#4D4D4D] font-medium  text-base sm:text-lg  px-8 py-2`} onClick={() => handleFilterChange("type", "rugged")}>Rugged</button>

                        {typefFilter ? <button className="flex gap-4 text-[#4D4D4D] text-base sm:text-lg  font-semibold leading-6 underline hover:no-underline" onClick={() => handleFilterChange("type", null)}>Clear fliters</button> : null}
                    </div>
                </div>
                <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {
                        displayedVans?.map((van) => {
                            return (
                                <Link to={van.id} key={van.id} state={{ search: `?${searchParams.toString()}`, type: typefFilter }}>
                                    <VansCard title={van.name} img={van.imageUrl} price={van.price}
                                        text={van.type.charAt(0).toUpperCase().concat(van.type.slice(1))} />
                                </Link>
                            )
                        })
                    }
                </div>
            </div>
        </main>
    );
}

export default Vans;