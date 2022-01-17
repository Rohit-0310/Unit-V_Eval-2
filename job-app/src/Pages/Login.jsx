import { useContext, useState } from "react";
import {useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthContext/AuthContext";
import { Buttton } from "../Style/Button";
import { Input } from "../Style/Input";
import { H2 } from "../Style/h";

export const Login = () => {
    const [form, setFrom] = useState({});
    const handleChangeLogin = ({ target: { name, value } }) => {
        setFrom({ ...form, [name]: value });
    };
    const { handleToken } = useContext(AuthContext);
    const handleSubmitLogin = () => {
        handleToken(12345678);
        navigate(-1);
    };

    const navigate = useNavigate();
    return (
      <div>
        <H2>Login Page</H2>
        <Input
            onChange={handleChangeLogin}
            name="email"
            type="email"
            required="true"
            placeholder="Enter Your Email"
        />
        <Input
            onChange={handleChangeLogin}
            name="password"
            type="text"
            required="true"
            placeholder="Enter Your Password"
        />
        <Buttton onClick={handleSubmitLogin}>Submit</Buttton>
      </div>
    );
};
