import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <nav className="bg-[#FFF7ED] py-10 px-4">
            <div className="max-w-7xl mx-auto container flex  items-center justify-between">
                <Link to="/" className="font-black text-[1.625rem] leading-10 cursor-pointer">
                    #VANLIFE
                </Link>
                <ul className="flex gap-4 text-[#4D4D4D] text-base font-semibold leading-6 cursor-pointer">
                    <Link to="/about">
                        About
                    </Link>
                    <Link to="/vans">
                        Vans
                    </Link>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar