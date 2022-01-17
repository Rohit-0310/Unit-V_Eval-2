import { useContext } from "react";
import { AuthContext } from "./AuthContext"
import { Navigate } from "react-router-dom";

export const Route = ({ children }) => {
    const { token } = useContext(AuthContext);
    if (!token) {
        return <Navigate to={"/login"} />;
    }
        return children;
};
