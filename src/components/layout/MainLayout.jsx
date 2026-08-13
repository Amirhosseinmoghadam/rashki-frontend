import { Outlet } from "react-router-dom";
import Navbar from "../components/layout/Navbar";

function MainLayout() {
    return (
        <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-950 dark:text-white">
            <Navbar />

            <main>
                <Outlet />
            </main>
        </div>
    );
}

export default MainLayout;