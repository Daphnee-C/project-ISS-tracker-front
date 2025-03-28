import { Link } from "react-router"


const NavBar = () => {
    return (
    <header>
        <nav className="bg-blue-300">
        <ul className="flex items-center justify-center gap-5 py-6 [&>li>a]:hover:text-pink-300">
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/iss-map">ISS Map</Link>
            </li>
            <li>
                <Link to="/register">Register</Link>
            </li>
            <li>
                <Link to="/login">Login</Link>
            </li>
        </ul>
        </nav>
    </header>
)}


export default NavBar