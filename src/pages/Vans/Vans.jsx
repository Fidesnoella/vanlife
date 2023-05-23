import { useEffect, useState } from "react";
import VansCard from "../../components/cards/Van"
import { Link, useSearchParams } from "react-router-dom";
import { getVans } from "../../../api";

const Vans = () => {
    const [vans, setVans] = useState([])
    const [searchParams, setSearchParams] = useSearchParams()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        async function loadVans() {
            setLoading(true)
            try {
                const data = await getVans()
                setVans(data)
            } catch (err) {
                setError(err)
            } finally {
                setLoading(false)
            }

        }
        loadVans()
    }, [])

    const typefFilter = searchParams.get("type")

    const displayedVans = typefFilter ? vans.filter(van => van.type === typefFilter) : vans;

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

    if (loading) {
        return <h1 className="max-w-7xl mx-auto  container p-20 text-2xl font-bold">Loading...</h1>
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