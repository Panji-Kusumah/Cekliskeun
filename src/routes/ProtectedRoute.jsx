import { Navigate, Outlet } from "react-router-dom";
const isAuthenticated = () => {
    return localStorage.getItem("auth") === "true";
};

export default function ProtectedRoute() {
    return isAuthenticated() ? <Outlet /> : <Navigate to="/myday" replace />;
}