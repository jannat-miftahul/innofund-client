import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import AuthLayout from "../layouts/AuthLayout";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";
import Page404 from "../pages/Page404";
import HomePage from "../pages/HomePage";
import RunningCampaigns from "../components/RunningCampaigns";
import AddCampaign from "../pages/AddCampaign";
import MyCampaigns from "../pages/MyCampaigns";
import MyDonations from "../pages/MyDonations";
import AllCampaigns from "../pages/AllCampaigns";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout />,
        children: [
            {
                path: "/",
                element: <HomePage />,
                children: [
                    {
                        path: "/running-campaigns",
                        element: <RunningCampaigns />,
                    },
                ],
            },
            {
                path: "all-campaigns",
                element: <AllCampaigns />,
            },
            {
                path: "/add-campaign",
                element: <AddCampaign />,
            },
            {
                path: "/my-campaigns",
                element: <MyCampaigns />,
            },
            {
                path: "/my-donations",
                element: <MyDonations />,
            },
        ],
    },
    {
        path: "auth",
        element: <AuthLayout />,
        children: [
            {
                path: "/auth/signin",
                element: <Signin />,
            },
            {
                path: "/auth/signup",
                element: <Signup />,
            },
        ],
    },
    {
        path: "*",
        element: <Page404 />,
    },
]);

export default routes;
