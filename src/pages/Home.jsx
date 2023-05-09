import { Link } from "react-router-dom";

const Home = () => {
    return (
        <main className="bg-mountain bg-cover bg-no-repeat h-full flex">
            <div className="text-white gap-4 md:gap-10 text-center flex flex-col items-center justify-center mx-auto max-w-lg md:max-w-3xl">
                <h1 className="text-4xl md:text-6xl leading-10 font-extrabold">You got the travel plans, we got the travel vans.</h1>
                <p className="text-base md:text-xl font-medium leading-6">Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
                <Link to="/vans" className="bg-[#FF8C38] rounded-lg hover:bg-[#f8a56b] py-2 px-10 md:px-14 text-base md:text-lg font-bold leading-8">
                    Find your van
                </Link>
            </div>
        </main>
    );
}

export default Home;