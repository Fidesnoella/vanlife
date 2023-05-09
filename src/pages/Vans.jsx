import { useEffect, useState } from "react";
import VansCard from "../components/cards/Van"
import { Link } from "react-router-dom";

const Vans = () => {
    const [vans, setVans] = useState([])

    useEffect(() => {
        fetch("/api/vans")
            .then(response => response.json())
            .then(data => setVans(data.vans))
    }, [])

    return (
        <main className="bg-[#FFF7ED] h-full">
            <div className="max-w-[70rem] mx-auto container py-20 px-4">
                <div className="flex flex-col gap-y-8 ">
                    <h1 className="text-3xl sm:text-4xl font-bold leading-10">Explore our van options</h1>
                    <div className="flex flex-wrap gap-6 items-center">
                        <button className="bg-[#FFEAD0] hover:bg-[#E17654] hover:text-[#FFEAD0] rounded-md text-[#4D4D4D] font-medium text-base sm:text-lg  px-8 py-2">Simple</button>
                        <button className="bg-[#FFEAD0] hover:bg-[#161616] hover:text-[#FFEAD0] rounded-md text-[#4D4D4D] font-medium  text-base sm:text-lg  px-8 py-2">Luxury</button>
                        <button className="bg-[#FFEAD0] hover:bg-[#115E59] hover:text-[#FFEAD0] rounded-md text-[#4D4D4D] font-medium  text-base sm:text-lg  px-8 py-2">Rugged</button>
                        <button className="flex gap-4 text-[#4D4D4D] text-base sm:text-lg  font-semibold leading-6 underline hover:no-underline">Clear fliters</button>
                    </div>
                </div>
                <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {
                        vans.map((van) => {
                            return (
                                <Link to={`/vans/${van.id}`} key={van.id}>
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