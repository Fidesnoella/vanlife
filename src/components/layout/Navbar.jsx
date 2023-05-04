import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <nav className="bg-[#FFF7ED] py-10 px-4">
            <div className="max-w-7xl mx-auto container flex  items-center justify-between">
                <Link to="/">
                    <h1 className="font-black text-[1.625rem] leading-10 cursor-pointer">#VANLIFE</h1>
                </Link>
                <ul className="flex gap-4 text-[#4D4D4D] text-base font-semibold leading-6 cursor-pointer">
                    <Link to="/about">
                        <li>About</li>
                    </Link>
                    <Link to="/vans">
                        <li>Vans</li>
                    </Link>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar