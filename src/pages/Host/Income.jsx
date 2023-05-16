import chart from "../../assets/chart.png"
const vans = [
    {
        price: "$720",
        date: "1/12/22"
    },
    {
        price: "$560",
        date: "10/11/22"
    },
    {
        price: "$980",
        date: "23/12/22"
    }
]

const Income = () => {
    return (
        <main className="text-[#161616]">
            <div className="max-w-7xl mx-auto container px-4">
                <h1 className="text-3xl sm:text-4xl pb-10 font-bold">Income</h1>
                <p className="text-[#4D4D4D] cursor-pointer flex gap-1 text-base sm:text-lg">Last
                    <span className="font-bold underline hover:no-underline">30 days</span>
                </p>
                <h1 className="text-4xl sm:text-5xl pt-5 font-bold">$2,260</h1>
                <img src={chart} alt="" className="pt-10" />
            </div>
            <div className="bg-[#FFF7ED] py-14 px-4">
                <div className="max-w-7xl mx-auto container">
                    <div className="flex flex-col sm:flex-row justify-between">
                        <h1 className="text-2xl sm:text-3xl font-bold">Your transactions (3)</h1>
                        <p className="text-[#4D4D4D] cursor-pointer flex gap-1 text-base sm:text-lg">Last
                            <span className="font-bold underline hover:no-underline">30 days</span>
                        </p>
                    </div>
                    <div className="flex flex-col gap-3 mt-6">
                        {
                            vans.map((van, index) =>
                                <div className="bg-white text-black px-6 py-10 flex justify-between" key={index}>
                                    <h1 className="font-bold text-xl sm:text-2xl">{van.price}</h1>
                                    <p className="text-lg sm:text-xl font-normal text-[#4D4D4D]">{van.date}</p>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Income;