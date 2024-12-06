import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import AuthLayout from "../layouts/AuthLayout";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout />,
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
        element: <div>404 Not Found</div>,
    },
]);

export default routes;
