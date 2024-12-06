import { Outlet } from "react-router-dom";
import Banner from "../components/Banner";

const HomePage = () => {
    return (
        <div>
            <Banner />

            <Outlet />
        </div>
    );
};

export default HomePage;