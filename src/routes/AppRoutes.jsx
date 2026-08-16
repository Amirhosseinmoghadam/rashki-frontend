import {
    Routes,
    Route,
} from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Home from "../pages/Home/Home";
import Products from "../pages/Products/Products";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";

import Login from "../pages/Auth/Login";

import NotFound from "../pages/NotFound/NotFound";


function AppRoutes() {

    return (
        <Routes>

            {/* =================================================
                PUBLIC PAGES
            ================================================= */}

            <Route element={<MainLayout />}>

                <Route
                    path="/"
                    element={<Home />}
                />

                <Route
                    path="/products"
                    element={<Products />}
                />

                <Route
                    path="/about"
                    element={<About />}
                />

                <Route
                    path="/contact"
                    element={<Contact />}
                />

            </Route>


            {/* =================================================
                AUTH
            ================================================= */}

            <Route
                path="/login"
                element={<Login />}
            />


            {/* =================================================
                404
            ================================================= */}

            <Route
                path="*"
                element={<NotFound />}
            />

        </Routes>
    );
}


export default AppRoutes;