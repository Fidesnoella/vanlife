import { NavLink, Outlet } from "react-router-dom";

const HouseLayout = () => {
    return (
        <main className="h-full bg-[#FFF7ED]">
            <div className="bg-[#FFF7ED] py-10 px-4">
                <div className="max-w-7xl mx-auto container flex  items-center justify-between">
                    <ul className="flex gap-4 sm:gap-8 text-[#4D4D4D] text-lg sm:text-xl font-semibold leading-6 cursor-pointer flex-wrap">
                        <NavLink to="." end className={({ isActive }) => isActive ? "text-[#161616] underline" : null}>
                            <li className="hover:text-[#161616] hover:underline">Dashboard</li>
                        </NavLink>
                        <NavLink to="income" className={({ isActive }) => isActive ? "text-[#161616] underline" : null}>
                            <li className="hover:text-[#161616] hover:underline">Income</li>
                        </NavLink>
                        <NavLink to="vans" className={({ isActive }) => isActive ? "text-[#161616] underline" : null}>
                            <li className="hover:text-[#161616] hover:underline">Vans</li>
                        </NavLink>
                        <NavLink to={"reviews"} className={({ isActive }) => isActive ? "text-[#161616] underline" : null}>
                            <li className="hover:text-[#161616] hover:underline">Reviews</li>
                        </NavLink>
                    </ul>
                </div>
            </div>
            <Outlet />
        </main >
    );
}

export default HouseLayout;