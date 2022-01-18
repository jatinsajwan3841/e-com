import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Loader from "./components/layout/loader";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";
import SecureRoute from "./utils/secureRoute";
import routes from "./Routes";
import "./App.css";
import NoMatch from "./components/layout/404";
import store from "./store";
import Alert from "./utils/alert";
import Loading from "./utils/loading";
import MetaData from "./utils/metaData";
import axios from "./utils/axiosConfig";
import { useSelector } from "react-redux";

function App() {
    const { isAuthenticated } = useSelector((state) => state.user);
    const isAuthenticatedRef = React.useRef(isAuthenticated);
    const handleCredentialResponse = async (response) => {
        try {
            const { data } = await axios.post(`/api/v1/continue/google`, {
                token: response.credential,
            });
            store.dispatch({
                type: "LOGIN_SUCCESS",
                payload: data.user,
            });
        } catch (error) {
            store.dispatch({
                type: "LOGIN_FAIL",
                payload: error.response.data.message,
            });
        }
    };

    React.useEffect(() => {
        isAuthenticatedRef.current = isAuthenticated;
    }, [isAuthenticated]);

    React.useEffect(() => {
        const loadUser = async () => {
            try {
                const { data } = await axios.get(`/api/v1/profile`);
                store.dispatch({
                    type: "LOAD_USER_SUCCESS",
                    payload: data.user,
                });
            } catch {
                store.dispatch({
                    type: "LOAD_USER_FAIL",
                });
            }
        };
        loadUser();
        window.onload = () => {
            window.google.accounts.id.initialize({
                client_id:
                    "685022877822-39l48c8ii774fbagg5ooot7ru6lmg03k.apps.googleusercontent.com",
                callback: handleCredentialResponse,
                context: "use",
                ux_mode: "popup",
                auto_select: "true",
            });
            setTimeout(() => {
                if (!isAuthenticatedRef.current)
                    window.google.accounts.id.prompt();
            }, 4000);
        };
    }, []);

    const menu = routes.map((route, index) => (
        <Route
            key={index}
            path={route.path}
            name={route.name}
            element={
                route.secure ? (
                    <SecureRoute isAdmin={route.isAdmin}>
                        <route.element />
                    </SecureRoute>
                ) : (
                    <>
                        <MetaData title={route.name} />
                        <route.element />
                    </>
                )
            }
        />
    ));
    return (
        <div className="app">
            <Header />
            <Alert />
            <Loading />
            <div className="content">
                <Suspense fallback={<Loader />}>
                    <Routes>
                        {menu}
                        <Route path="*" element={<NoMatch />} />
                    </Routes>
                </Suspense>
            </div>
            <Footer />
        </div>
    );
}

export default App;
