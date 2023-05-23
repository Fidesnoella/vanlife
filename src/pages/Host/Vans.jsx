import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Vans = () => {
    const [vans, setVans] = useState([])

    useEffect(() => {
        fetch("/api/host/vans")
            .then(response => response.json())
            .then(data => setVans(data.vans))
    }, [])

    return (
        <div className="bg-[#FFF7ED] pt-6 pb-16 px-4">
            <div className="max-w-7xl mx-auto container">
                <h1 className="text-2xl sm:text-3xl font-bold">Your listed vans</h1>
                <div className="flex flex-col gap-3 mt-6">
                    {
                        vans.map((van) =>
                            <Link to={van.id} key={van.id}>
                                <div className="bg-white text-black p-6 flex flex-col sm:flex-row items-center gap-2">
                                    <img src={van.imageUrl} alt="" className="rounded-md w-24 sm:w-28" />
                                    <div className="flex flex-col gap-1">
                                        <h1 className="font-bold text-xl sm:text-2xl">{van.name}</h1>
                                        <p className="text-lg sm:text-xl font-medium text-[#4D4D4D]">${van.price}/day</p>
                                    </div>
                                </div>
                            </Link>
                        )
                    }
                </div>
            </div>
        </div>
    );
}

export default Vans;