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

function App() {
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
