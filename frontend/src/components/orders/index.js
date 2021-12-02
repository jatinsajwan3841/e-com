import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { myOrders } from "../../actions/orderActions";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import NextWeekRoundedIcon from "@mui/icons-material/NextWeekRounded";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import "./index.scss";
import "../cart/index.scss";

const Orders = () => {
    const dispatch = useDispatch();
    const { orders } = useSelector((state) => state.myOrders);
    const columns = [
        { field: "id", headerName: "Order ID", minWidth: 300, flex: 1 },

        {
            field: "status",
            headerName: "Status",
            minWidth: 150,
            flex: 0.5,
            cellClassName: (params) => {
                return params.getValue(params.id, "status") === "Delivered"
                    ? "greenColor"
                    : "redColor";
            },
        },
        {
            field: "itemsQty",
            headerName: "Items Qty",
            type: "number",
            minWidth: 150,
            flex: 0.2,
        },

        {
            field: "amount",
            headerName: "₹ Amount",
            type: "number",
            minWidth: 270,
            flex: 0.4,
        },

        {
            field: "details",
            flex: 0.1,
            headerName: "Details",
            minWidth: 150,
            type: "number",
            sortable: false,
            renderCell: (params) => {
                return (
                    <Link to={`/order/${params.getValue(params.id, "id")}`}>
                        <NextWeekRoundedIcon />
                    </Link>
                );
            },
        },
    ];

    const rows = [];

    orders &&
        orders.forEach((item) => {
            rows.push({
                itemsQty: item.orderItems.length,
                id: item._id,
                status: item.orderStatus,
                amount: item.totalPrice,
            });
        });

    React.useEffect(() => {
        dispatch(myOrders());
    }, [dispatch]);
    return (
        <div className="orders-container">
            <div className="title">Orders</div>
            {rows.length === 0 ? (
                <div className="empty-cart">
                    <RemoveShoppingCartIcon className="icon" /> uh oh, let's add
                    something to the cart!
                    <Link to="/products">
                        <button type="button" className="return">
                            View Products
                        </button>
                    </Link>
                </div>
            ) : (
                <DataGrid
                    rows={rows}
                    columns={columns}
                    pageSize={10}
                    rowsPerPageOptions={[10]}
                    disableSelectionOnClick
                    autoHeight
                />
            )}
        </div>
    );
};

export default Orders;
