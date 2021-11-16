import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Loader from "./components/layout/loader";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";
import SecureRoute from "./utils/secureRoute";
import routes from "./Routes";
import "./App.css";
import NoMatch from "./components/layout/404";
import { loadUser } from "./actions/userAction";
import store from "./store";
import Alert from "./utils/alert";
import Loading from "./utils/loading";

function App() {
    React.useEffect(() => {
        store.dispatch(loadUser());
    }, []);

    const menu = routes.map((route, index) => {
        if (route.secure)
            return (
                <Route
                    key={index}
                    path={route.path}
                    name={route.name}
                    element={
                        <SecureRoute>
                            <route.element />
                        </SecureRoute>
                    }
                ></Route>
            );
        else
            return (
                <Route
                    key={index}
                    path={route.path}
                    name={route.name}
                    element={<route.element />}
                />
            );
    });
    return (
        <Suspense fallback={<Loader />}>
            <div className="app">
                <Header />
                <Alert />
                <Loading />
                <div className="content">
                    <Routes>
                        {" "}
                        {menu}
                        <Route path="*" element={<NoMatch />} />
                    </Routes>
                </div>
                <Footer />
            </div>
        </Suspense>
    );
}

export default App;
