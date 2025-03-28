import { useState, useContext } from "react"
import { AuthContext } from "../context/AuthContext.jsx"
import { useNavigate } from "react-router"

const Register = () => {
    const { handleRegister, error } = useContext(AuthContext);
    const [formRegister, setFormRegister] = useState({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
    })
    const [isSubmitting, setIsSubmitting] = useState(false);
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        setIsSubmitting(true)
        handleRegister(e, formRegister)
            .then(() => {
                navigate("/login")
            })
            .catch(() => {
                setIsSubmitting(false)
            })
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-opacity-20 backdrop-blur-md">
            <div className="w-full max-w-md bg-cyan-900 bg-opacity-30 backdrop-blur-md rounded-2xl shadow-2xl p-8 space-y-6">
                <h1 className="text-3xl font-bold text-center text-white mb-6">Register</h1>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                        <label htmlFor="firstname" className="block text-sm font-medium text-white">
                            Firstname
                        </label>
                        <input
                            id="firstname"
                            onChange={(e) =>
                                setFormRegister({ ...formRegister, first_name: e.target.value })
                            }
                            className="bg-white/10 text-white w-full px-3 py-2 border border-[#a5b8cb] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#a5b8cb]/50 transition duration-300"
                            type="text"
                            required
                        />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="lastname" className="block text-sm font-medium text-white">
                            Lastname
                        </label>
                        <input
                            id="lastname"
                            onChange={(e) =>
                                setFormRegister({ ...formRegister, last_name: e.target.value })
                            }
                            className="bg-white/10 text-white w-full px-3 py-2 border border-[#a5b8cb] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#a5b8cb]/50 transition duration-300"
                            type="text"
                            required
                        />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="email" className="block text-sm font-medium text-white">
                            Email
                        </label>
                        <input
                            id="email"
                            onChange={(e) =>
                                setFormRegister({ ...formRegister, email: e.target.value })
                            }
                            className="bg-white/10 text-white w-full px-3 py-2 border border-[#a5b8cb] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#a5b8cb]/50 transition duration-300"
                            type="email"
                            required
                        />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="password" className="block text-sm font-medium text-white">
                            Password
                        </label>
                        <input
                            id="password"
                            onChange={(e) =>
                                setFormRegister({ ...formRegister, password: e.target.value })
                            }
                            className="bg-white/10 text-white w-full px-3 py-2 border border-[#a5b8cb] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#a5b8cb]/50 transition duration-300"
                            type="password"
                            required
                        />
                    </div>

                    {error && <p className="text-red-500 text-sm mt-1 text-center">{error}</p>}

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`w-full px-4 py-2 bg-[#a5b8cb] bg-opacity-80 text-white rounded-full hover:bg-opacity-90 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-[#a5b8cb]/50 ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""}`}
                    >
                        {isSubmitting ? "Enregistrement..." : "S'inscrire"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Register