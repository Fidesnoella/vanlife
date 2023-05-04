const VansCard = ({ img, title, price, text }) => {
    return (
        <div className="flex flex-col gap-3">
            <img src={img} alt="vans" className="rounded-md object-cover" />
            <div className="flex justify-between text-[#161616]">
                <h1 className="font-semibold text-xl sm:text-2xl">{title}</h1>
                <p className="text-lg flex flex-col items-end"><span className="font-semibold text-xl sm:text-2xl">${price}</span>/day</p>
            </div>
            <button className={`text-[#FFEAD0] font-semibold rounded-md text-base sm:text-lg py-2 px-4 items-start w-40 hover:bg-opacity-80
             ${text.toLowerCase() === "rugged" ? "bg-[#115E59]" : text.toLowerCase() === "simple" ? "bg-[#E17654]" : "bg-[#161616]"}`}>{text}</button>
        </div>
    );
}

export default VansCard;