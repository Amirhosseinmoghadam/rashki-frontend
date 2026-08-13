import { Outlet } from "react-router-dom";

import Navbar from "../components/layout/Navbar.jsx";
import Footer from "../components/layout/Footer.jsx";
import SplashCursor from "../components/effects/SplashCursor.jsx";

function MainLayout() {
    return (
        <div className="min-h-screen bg-background text-text-main transition-colors duration-300">
            {/* Cursor Effect */}
            <SplashCursor
                DENSITY_DISSIPATION={8}
                VELOCITY_DISSIPATION={2}
                PRESSURE={0.1}
                CURL={2}
                SPLAT_RADIUS={0.2}
                SPLAT_FORCE={6000}
                COLOR_UPDATE_SPEED={10}
                SHADING
                RAINBOW_MODE={false}
                COLOR="#f5943a"
            />

            <div className="relative z-10 flex min-h-screen flex-col">
                <Navbar />

                <main className="min-h-[calc(100vh-76px)] pb-24 md:pb-0">
                    <Outlet />
                </main>

                <Footer />
            </div>
        </div>
    );
}

export default MainLayout;