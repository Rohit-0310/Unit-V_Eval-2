import { Link } from "react-router-dom";
import { H1 } from "../Style/h";

export const Navbar = () => {
    return (
        <div style={{ display: 'flex', marginLeft:"10%", width: '100%'}}>
            <Link to={"/"}><H1>Home Page</H1></Link>
            <Link to={"/Jobpage"}><H1>Job Page</H1></Link>
            <Link to={"/admin"}><H1>Admin</H1></Link>
            <Link to={"/login"}><H1>LogIn</H1></Link>
        </div>
    )
}