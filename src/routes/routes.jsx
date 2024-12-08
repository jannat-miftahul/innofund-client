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
import UpdateCampaign from "../pages/UpdateCampaign";
import SecuredRoutes from "./SecuredRoutes";

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
                element: (
                    <SecuredRoutes>
                        <CampaignDetails />
                    </SecuredRoutes>
                ),
                loader: ({ params }) =>
                    fetch(`http://localhost:5000/campaigns/${params.id}`),
            },
            {
                path: "/updateCampaign/:id",
                element: (
                    <SecuredRoutes>
                        <UpdateCampaign />
                    </SecuredRoutes>
                ),
                loader: ({ params }) =>
                    fetch(`http://localhost:5000/campaigns/${params.id}`),
            },
            {
                path: "/myCampaigns",
                element: (
                    <SecuredRoutes>
                        <MyCampaigns />
                    </SecuredRoutes>
                ),
            },
            {
                path: "/myDonations",
                element: (
                    <SecuredRoutes>
                        <MyDonations />
                    </SecuredRoutes>
                ),
                loader: () => fetch("http://localhost:5000/campaigns"),
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
