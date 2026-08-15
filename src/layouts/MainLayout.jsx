import { Outlet } from "react-router-dom";

import Navbar from "../components/layout/Navbar.jsx";
import Footer from "../components/layout/Footer.jsx";


function MainLayout() {
    return (
        <div className="min-h-screen bg-background text-text-main transition-colors duration-300">

            <div className="relative z-10 flex min-h-screen flex-col">

                <Navbar />

                <main className="relative flex-1 min-h-0">
                    <Outlet />
                </main>

                <Footer />

            </div>
        </div>
    );
}

export default MainLayout;