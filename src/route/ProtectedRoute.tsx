import { Route, redirect, Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ user, redirectPath = '/landing', children }) => {
    if (!user) {
        return <Navigate to={redirectPath} replace />;
    }
        return children ? children : <Outlet />;
    };

export default ProtectedRoute
