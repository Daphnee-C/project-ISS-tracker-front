import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import "./index.css";

import MyRouter from "./MyRouter";

import { AuthController } from "./context/AuthContext.jsx";

createRoot(document.getElementById("root")).render(
    <BrowserRouter>
        <AuthController>
            <MyRouter />
        </AuthController>
    </BrowserRouter>
);
