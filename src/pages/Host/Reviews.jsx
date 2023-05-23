import group from "../../assets/Group 314.png"

const Reviews = () => {
    return (
        <main className="bg-[#FFF7ED]">
            <div className="mx-auto container max-w-7xl px-4 xl:px-0 pb-10">
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-5 items-baseline">
                    <h1 className="text-3xl sm:text-4xl pb-0 sm:pb-10 font-bold">Your reviews</h1>
                    <p className="text-[#4D4D4D] cursor-pointer flex gap-1 text-base sm:text-lg">Last
                        <span className="font-bold underline hover:no-underline">30 days</span>
                    </p>
                </div>
                <img src={group} alt="" />
                <h1 className="text-xl sm:text-2xl pt-8 font-bold">Reviews(2)</h1>
                <div className="flex flex-col gap-3 border-b border-[#C7C7C7] py-4">
                    <p>⭐⭐⭐⭐⭐</p>
                    <p className="text-[#161616] font-bold text-xl sm:text-2xl">Elliot <span className="text-[#8C8C8C]">December 1, 2022</span></p>
                    <p className="max-w-2xl text-lg">The beach bum is such as awesome van! Such as comfortable trip. We had it for 2 weeks and there was not a single issue. Super clean when we picked it up and the host is very comfortable and understanding. Highly recommend!</p>
                </div>
                <div className="flex flex-col gap-3 border-b border-[#C7C7C7] py-4">
                    <p>⭐⭐⭐⭐⭐</p>
                    <p className="text-[#161616] font-bold text-xl sm:text-2xl">Sandy <span className="text-[#8C8C8C]">November 23, 2022</span></p>
                    <p className="max-w-2xl text-lg">
                        This is our third time using the Modest Explorer for our travels and we love it! No complaints, absolutely perfect!
                    </p>
                </div>
            </div>
        </main>
    );
}

export default Reviews;