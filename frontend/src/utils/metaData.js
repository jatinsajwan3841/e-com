import Helmet from "react-helmet";

const MetaData = ({ title }) => {
    return (
        <Helmet>
            <title>{title + " | Flip Outlet"}</title>
        </Helmet>
    );
};

export default MetaData;
