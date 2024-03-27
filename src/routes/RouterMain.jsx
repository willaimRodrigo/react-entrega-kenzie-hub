import { Route, Routes } from "react-router-dom";
import { LoginPage } from "../pages/LoginPage";
import { RegisterPage } from "../pages/RegisterPage";
import { DashboardPage } from "../pages/DashboardPage";
import { ErrorPage } from "../pages/ErrorPage";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const RouterMain = () => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    const logout = () => {
        setUser(null);
        navigate("/");
    }

    return(
        <Routes>
            <Route path="/" element={<LoginPage setUser={setUser} />} />
            <Route path="/register" element={<RegisterPage setUser={setUser} />} />
            <Route path="/dashboard" element={<DashboardPage user={user} logout={logout}/>} /> 
            <Route path="*" element={<ErrorPage />} /> 
        </Routes>
    )
}