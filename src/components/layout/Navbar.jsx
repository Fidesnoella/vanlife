import { NavLink } from "react-router-dom"
import avatar from "../../assets/Icon.svg"

const Navbar = () => {
    function fakeLogOut() {
        localStorage.removeItem("loggedin")
    }

    return (
        <nav className="bg-[#FFF7ED] py-10 px-4">
            <div className="max-w-7xl mx-auto container flex  items-center justify-between">
                <NavLink to="/">
                    <h1 className="font-black text-[1.625rem] leading-10 cursor-pointer text-xl sm:text-2xl">#VANLIFE</h1>
                </NavLink>
                <ul className="flex items-center gap-5 text-[#4D4D4D] text-lg sm:text-xl font-semibold leading-6 cursor-pointer">
                    <NavLink to="host" className={({ isActive }) => isActive ? "text-[#161616] underline" : ""}>
                        <li className="hover:text-[#161616] hover:underline">Host</li>
                    </NavLink>
                    <NavLink to="about" className={({ isActive }) => isActive ? "text-[#161616] underline" : ""}>
                        <li className="hover:text-[#161616] hover:underline">About</li>
                    </NavLink>
                    <NavLink to="vans" className={({ isActive }) => isActive ? "text-[#161616] underline" : ""}>
                        <li className="hover:text-[#161616] hover:underline">Vans</li>
                    </NavLink>
                    <NavLink to="login">
                        <img src={avatar} alt="avatar" className="hover:bg-[#f5e0c7] p-2 rounded-full w-9" />
                    </NavLink>
                    <button className="text-[1.0625rem] hover:bg-[#f5e0c7] p-1 rounded-full" onClick={fakeLogOut}>✖</button>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar