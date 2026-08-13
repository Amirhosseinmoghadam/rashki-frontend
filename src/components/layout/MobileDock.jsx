import { useNavigate, useLocation } from "react-router-dom";

import Dock from "../ui/Dock";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
    faHouse,
    faMagnifyingGlass,
    faCartShopping,
    faUser,
    faBars,
} from "@fortawesome/free-solid-svg-icons";

function MobileDock({ onMenuClick, onSearchClick }) {
    const navigate = useNavigate();
    const location = useLocation();

    const items = [
        {
            label: "خانه",
            icon: () => (
                <FontAwesomeIcon icon={faHouse} />
            ),
            active: location.pathname === "/",
            onClick: () => navigate("/"),
        },

        {
            label: "جستجو",
            icon: () => (
                <FontAwesomeIcon icon={faMagnifyingGlass} />
            ),
            active: false,
            onClick: onSearchClick,
        },

        {
            label: "سبد خرید",
            icon: () => (
                <FontAwesomeIcon icon={faCartShopping} />
            ),
            active: location.pathname === "/cart",
            onClick: () => navigate("/cart"),
        },

        {
            label: "حساب کاربری",
            icon: () => (
                <FontAwesomeIcon icon={faUser} />
            ),
            active: location.pathname === "/login",
            onClick: () => navigate("/login"),
        },

        {
            label: "منو",
            icon: () => (
                <FontAwesomeIcon icon={faBars} />
            ),
            active: false,
            onClick: onMenuClick,
        },
    ];

    return (
        <div
            className="
        fixed
        bottom-4
        left-1/2
        z-[100]
        -translate-x-1/2
        md:hidden
      "
        >
            <Dock items={items} />
        </div>
    );
}

export default MobileDock;