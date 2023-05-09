import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

const PageLayout = () => {
    return (
        <main className="flex flex-col h-screen">
            <Navbar />
            <div className="flex-1">
                <Outlet />
            </div>
            <Footer />
        </main>
    );
}

export default PageLayout;