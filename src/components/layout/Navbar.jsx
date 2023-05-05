import { NavLink } from "react-router-dom"

const Navbar = () => {
    return (
        <nav className="bg-[#FFF7ED] py-10 px-4">
            <div className="max-w-7xl mx-auto container flex  items-center justify-between">
                <NavLink to="/">
                    <h1 className="font-black text-[1.625rem] leading-10 cursor-pointer">#VANLIFE</h1>
                </NavLink>
                <ul className="flex gap-4 sm:gap-8 text-[#4D4D4D] text-base sm:text-lg font-semibold leading-6 cursor-pointer">
                    <NavLink to="/host">
                        <li className="hover:text-[#161616] hover:underline">Host</li>
                    </NavLink>
                    <NavLink to="/about">
                        <li className="hover:text-[#161616] hover:underline">About</li>
                    </NavLink>
                    <NavLink to="/vans">
                        <li className="hover:text-[#161616] hover:underline">Vans</li>
                    </NavLink>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar