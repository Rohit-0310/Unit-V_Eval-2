import { useContext, useState } from "react";
import {useNavigate } from "react-router-dom";
import { AuthContext } from "../Authcontex/AuthContext";

export const Login = () => {
    const [form, setFrom] = useState({});
    const handleChange = ({ target: { name, value } }) => {
        setFrom({ ...form, [name]: value });
    };
    const { handleToken } = useContext(AuthContext);
    const handleSubmit = () => {
        handleToken(12345678);
        navigate(-1);
    };

    const navigate = useNavigate();
    return (
      <div>
        <h1>Login</h1>
        <input
            onChange={handleChange}
            name="email"
            type="text"
            placeholder="Enter Email"
        />
        <input
            onChange={handleChange}
            name="password"
            type="text"
            placeholder="Enter Password"
        />
        <button onClick={handleSubmit}>Submit</button>
      </div>
    );
};
