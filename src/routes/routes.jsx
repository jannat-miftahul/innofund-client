import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import AuthLayout from "../layouts/AuthLayout";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";
import Page404 from "../pages/Page404";
import HomePage from "../pages/HomePage";
import AddCampaign from "../pages/AddCampaign";
import MyCampaigns from "../pages/MyCampaigns";
import MyDonations from "../pages/MyDonations";
import AllCampaigns from "../pages/AllCampaigns";
import CampaignDetails from "../pages/CampaignDetails";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout />,
        children: [
            {
                path: "/",
                element: <HomePage />,
            },
            {
                path: "allCampaigns",
                element: <AllCampaigns />,
                loader: () => fetch("http://localhost:5000/campaigns"),
            },
            {
                path: "/addCampaign",
                element: <AddCampaign />,
            },
            {
                path: "/campaigns/:id",
                element: <CampaignDetails />,
                loader: ({ params }) =>
                    fetch(`http://localhost:5000/campaigns/${params.id}`),
            },
            {
                path: "/myCampaigns",
                element: <MyCampaigns />,
            },
            {
                path: "/myDonations",
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
