import { Link } from "react-router-dom";
import person from "../assets/image 55.png"

const About = () => {
    return (
        <main className="bg-[#FFF7ED] h-full">
            <img src={person} alt="person" className="w-full object-cover bg-center h-[30rem]" />
            <div className="mx-auto max-w-[70rem] container pt-10 text-[#161616] px-4">
                <div className="flex flex-col gap-y-5 max-w-3xl md:max-w-6xl mx-auto">
                    <h1 className="text-3xl sm:text-4xl font-bold leading-10">Don’t squeeze in a sedan when you could relax in a van.</h1>
                    <p className="text-lg sm:text-xl leading-8">Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.
                        (Hitch costs extra 😉)
                    </p>
                    <p className="text-lg sm:text-xl leading-8">
                        Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.
                    </p>
                </div>
                <div className="bg-[#FFCC8D] rounded-md max-w-3xl mx-auto md:max-w-6xl w-full py-14 mt-10 mb-20">
                    <div className="flex flex-col gap-6 mx-auto justify-center items-center">
                        <h1 className="text-2xl sm:text-3xl leading-8 font-bold text-center">Your destination is waiting.<br />
                            Your van is ready.</h1>
                        <Link to="/vans" className="font-bold text-base sm:text-lg py-3 px-6 bg-[#161616] rounded-lg text-white hover:bg-opacity-90">Explore our vans</Link>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default About;