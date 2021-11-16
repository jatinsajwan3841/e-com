import React from "react";

const Home = React.lazy(() => import("./components/home"));
const Product = React.lazy(() => import("./components/product"));
const Products = React.lazy(() => import("./components/products"));
const Login = React.lazy(() => import("./components/login"));
const Profile = React.lazy(() => import("./components/profile"));
const ForgotPass = React.lazy(() => import("./components/forgotPass"));
const ResetPass = React.lazy(() => import("./components/resetPass"));

const routes = [
    {
        path: "/",
        name: "Home Page",
        secure: false,
        element: Home,
    },
    {
        path: "/product/:id",
        name: "Product",
        secure: false,
        element: Product,
    },
    {
        path: "/products",
        name: "Products",
        secure: false,
        element: Products,
    },
    {
        path: "/products/:keyword",
        name: "Products",
        secure: false,
        element: Products,
    },
    {
        path: "/login",
        name: "Login",
        secure: false,
        element: Login,
    },
    {
        path: "/profile",
        name: "Profile",
        secure: true,
        element: Profile,
    },
    {
        path: "/password/forgot",
        name: "Profile",
        secure: false,
        element: ForgotPass,
    },
    {
        path: "/password/reset/:token",
        name: "Profile",
        secure: false,
        element: ResetPass,
    },
];

export default routes;
