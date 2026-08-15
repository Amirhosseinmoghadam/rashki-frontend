import { Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Home from "../pages/Home/Home";
import Products from "../pages/Products/Products";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Login from "../pages/Auth/Login";
import NotFound from "../pages/NotFound/NotFound.jsx";

function AppRoutes() {
    return (
        <Routes>
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

                <Route
                    path="/login"
                    element={<Login />}
                />

                <Route
                    path="*"
                    element={<NotFound />}
                />
            </Route>
        </Routes>
    );
}

export default AppRoutes;