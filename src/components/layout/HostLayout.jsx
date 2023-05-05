import { Link, Outlet } from "react-router-dom";

const HouseLayout = () => {
    return (
        <div>
            <ul className="flex gap-3">
                <Link to={"/host"}><li>Dashboard</li></Link>
                <Link to="/host/income"><li>Income</li></Link>
                <Link to={"/host/reviews"}><li>Reviews</li></Link>
            </ul>
            <Outlet />
        </div>
    );
}

export default HouseLayout;