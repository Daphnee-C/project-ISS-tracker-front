import { Link } from "react-router"
import { AuthContext } from "../context/AuthContext.jsx"
import { useContext, useState } from 'react'

const NavBar = () => {
    const { isLogged, handleLogout } = useContext(AuthContext)
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <header>
            <nav className="bg-cyan-900 bg-opacity-20 backdrop-blur-md rounded-3xl shadow-lg py-12">
                <div className="relative">

                    <button className="lg:hidden flex items-center absolute left-10 z-10 flex-col gap-1" onClick={toggleMenu}>
                        <span className="block w-6 h-0.5 bg-white"></span>
                        <span className="block w-6 h-0.5 bg-white"></span>
                        <span className="block w-6 h-0.5 bg-white"></span>
                    </button>
                </div>

                <ul className={`flex flex-col md:flex-row px-16 items-center justify-center gap-4 ${isMenuOpen ? 'block' : 'hidden'}`}>
                    <li className="transition-all w-40 text-center duration-300 ease-in-out transform hover:scale-110 hover:shadow-xl">
                        <Link to="/" className="block px-4 py-2 bg-[#a5b8cb] bg-opacity-20 backdrop-blur-md rounded-full text-black font-medium hover:bg-white/55 transition-all duration-300 ease-in-out">
                            Home
                        </Link>
                    </li>

                    {isLogged ? (
                        <>
                            <li className="transition-all w-40 text-center duration-300 ease-in-out transform hover:scale-110 hover:shadow-xl">
                                <Link to="/iss-map" className="block px-4 py-2 bg-[#a5b8cb] bg-opacity-20 backdrop-blur-md rounded-full text-black font-medium hover:bg-white/55 transition-all duration-300 ease-in-out">
                                    ISS Map
                                </Link>
                            </li>

                            <li className="transition-all w-40 text-center duration-300 ease-in-out transform hover:scale-110 hover:shadow-xl">
                                <button onClick={handleLogout} className="block px-4 py-2 bg-[#a5b8cb] bg-opacity-20 backdrop-blur-md rounded-full text-black font-medium hover:bg-white/55 transition-all duration-300 ease-in-out">
                                    Logout
                                </button>
                            </li>
                        </>
                    ) : (
                        <>
                            <li className="transition-all w-40 text-center duration-300 ease-in-out transform hover:scale-110 hover:shadow-xl">
                                <Link to="/register" className="block px-4 py-2 bg-[#a5b8cb] bg-opacity-20 backdrop-blur-md rounded-full text-black font-medium hover:bg-white/55 transition-all duration-300 ease-in-out">
                                    Register
                                </Link>
                            </li>

                            <li className="transition-all w-40 text-center duration-300 ease-in-out transform hover:scale-110 hover:shadow-xl">
                                <Link to="/login" className="block px-4 py-2 bg-[#a5b8cb] bg-opacity-20 backdrop-blur-md rounded-full text-black font-medium hover:bg-white/55 transition-all duration-300 ease-in-out">
                                    Login
                                </Link>
                            </li>
                        </>
                    )}
                </ul>
            </nav>
        </header>
    )
}

export default NavBar