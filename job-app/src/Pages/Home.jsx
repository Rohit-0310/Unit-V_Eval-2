import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Authcontex/AuthContext";

export const Home = () => {
  const { token } = useContext(AuthContext);
  if (!token) {
    return <Navigate to={"/login"} />;
  }
  return (
    <div>
      <h1>Home Page</h1>
    </div>
  );
};
