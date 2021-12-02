import React from "react";
import SideBar from "../sidebar";
import ReqChart from "../chart";
import { useDispatch } from "react-redux";
import { getAllUsers } from "../../actions/userAction";
import "./index.scss";

const data = {
    labels: [1, 2, 3, 4, 5],
    label: "dont know",
    data: [20, 30, 40, 50, 60],
};

const Dashboard = () => {
    const dispatch = useDispatch();
    React.useEffect(() => {
        dispatch(getAllUsers());
    }, [dispatch]);
    return (
        <div className="dash-container">
            <SideBar />
            <div className="title">Dashboard</div>
            <div className="dash">
                <div className="card">
                    <div className="card-title">Total Amount</div>
                    <p className="sales-amnt">₹{500}</p>
                </div>
                <div className="card">
                    <div className="card-title">Products</div>
                    <p className="sales-amnt">{900}</p>
                </div>
                <div className="card">
                    <div className="card-title">Orders</div>
                    <p className="sales-amnt">{900}</p>
                </div>
                <div className="card">
                    <div className="card-title">Users</div>
                    <p className="sales-amnt">{900}</p>
                </div>
                <div className="card">
                    <div className="card-title">Orders graph</div>
                    <p className="sales-amnt">
                        <ReqChart type="line" data={data} />
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
