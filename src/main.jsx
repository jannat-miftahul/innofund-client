import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import routes from "./routes/routes";
import AuthProvider from "./provider/AuthProvider";
import ThemeProvider from "./provider/ThemeProvider";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <ThemeProvider>
            <AuthProvider>
                <RouterProvider router={routes} />
            </AuthProvider>
        </ThemeProvider>
    </StrictMode>
);
