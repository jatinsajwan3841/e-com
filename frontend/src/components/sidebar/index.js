import React from "react";
import { Link } from "react-router-dom";
import DashboardCustomizeRoundedIcon from "@mui/icons-material/DashboardCustomizeRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import ImportContactsRoundedIcon from "@mui/icons-material/ImportContactsRounded";
import PeopleAltRoundedIcon from "@mui/icons-material/PeopleAltRounded";
import RateReviewRoundedIcon from "@mui/icons-material/RateReviewRounded";
import "./index.scss";

const data = [
    {
        name: "Dashboard",
        link: "/admin/dashboard",
        icon: DashboardCustomizeRoundedIcon,
    },
    {
        name: "Products",
        link: "/admin/products",
        icon: ShoppingCartRoundedIcon,
    },
    {
        name: "Orders",
        link: "/admin/orders",
        icon: ImportContactsRoundedIcon,
    },
    {
        name: "Users",
        link: "/admin/users",
        icon: PeopleAltRoundedIcon,
    },
    {
        name: "Reviews",
        link: "/admin/reviews",
        icon: RateReviewRoundedIcon,
    },
];

const SideBar = () => {
    return (
        <div className="sidebar">
            {data.map((item, index) => (
                <Link to={item.link} className="side-nav-link" key={index}>
                    <item.icon /> {item.name}
                </Link>
            ))}
        </div>
    );
};

export default SideBar;
