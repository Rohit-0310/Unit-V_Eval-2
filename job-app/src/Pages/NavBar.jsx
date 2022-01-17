import { Link } from "react-router-dom";

export const Navbar = () => {
    return (
        <div>
            <Link to={"/"}><h1>Home Page</h1></Link>
            <Link to={"/login"}><h1>LogIn</h1></Link>
            <Link to={"/Jobpage"}><h1>Job Page</h1></Link>
        </div>
    )
}