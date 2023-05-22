const vans = [
    {
        img: "https://assets.scrimba.com/advanced-react/react-router/modest-explorer.png",
        title: "Modest Explorer",
        text: "$60/day"
    },
    {
        img: "https://assets.scrimba.com/advanced-react/react-router/beach-bum.png",
        title: "Beach Bum",
        text: "$80/day"
    },
    {
        img: "https://assets.scrimba.com/advanced-react/react-router/green-wonder.png",
        title: "Green Wonder",
        text: "$70/day"
    },
]

const Dashboard = () => {
    return (
        <main className="text-[#161616]">
            <div className="bg-[#FFEAD0] py-16 px-4">
                <div className="max-w-7xl mx-auto container flex flex-col gap-4 sm:gap-6 font-bold">
                    <h1 className="text-4xl sm:text-5xl">Welcome!</h1>
                    <div className="text-[#4D4D4D] flex flex-col sm:flex-row justify-between text-lg sm:text-xl font-normal">
                        <p>Income last <span className="font-bold underline hover:no-underline cursor-pointer">30 days</span></p>
                        <p className="text-[#161616]">Details</p>
                    </div>
                    <p className="text-4xl sm:text-5xl">$2,260</p>
                </div>
            </div>
            <div className="bg-[#FFDDB2] py-12 px-4">
                <div className="max-w-7xl mx-auto container flex flex-col sm:flex-row justify-between">
                    <p className="flex font-normal items-center text-2xl sm:text-3xl">
                        <span className="font-bold pr-4">Review score</span>
                        <span className="font-bold">⭐5.0</span>/5
                    </p>
                    <p className="text-lg sm:text-xl font-normal">Details</p>
                </div>
            </div>
            <div className="bg-[#FFF7ED] py-14 px-4">
                <div className="max-w-7xl mx-auto container">
                    <div className="flex flex-col sm:flex-row justify-between">
                        <h1 className="text-2xl sm:text-3xl font-bold">Your listed vans</h1>
                        <p className="text-lg sm:text-xl font-normal">View All</p>
                    </div>
                    <div className="flex flex-col gap-3 mt-6">
                        {
                            vans.map((van, index) =>
                                <div className="bg-white text-black p-6 flex justify-between" key={index}>
                                    <div className="flex flex-col sm:flex-row items-center gap-2">
                                        <img src={van.img} alt="" className="rounded-md w-24 sm:w-28" />
                                        <div className="flex flex-col gap-1">
                                            <h1 className="font-bold text-xl sm:text-2xl">{van.title}</h1>
                                            <p className="text-lg sm:text-xl text-[#4D4D4D] font-medium">{van.text}</p>
                                        </div>
                                    </div>
                                    <button className="text-lg sm:text-xl font-normal">Edit</button>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Dashboard;