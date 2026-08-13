import { Outlet } from "react-router-dom";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import GlobalMouseGlow from "../components/effects/GlobalMouseGlow";

function MainLayout() {
    return (
        <div className="min-h-screen bg-background text-text-main">
            <GlobalMouseGlow />

            <Navbar />

            <main className="min-h-[70vh]">
                <Outlet />
            </main>

            <Footer />
        </div>
    );
}

export default MainLayout;
