import { useContext, useState } from "react"
import { AuthContext } from "../context/AuthContext.jsx"

const Login = () => {
    const { handleLogin, error, errorEmail, errorPassword } = useContext(AuthContext);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")

    return (
        <div className="min-h-screen flex items-center justify-center  bg-opacity-20 backdrop-blur-md">
            <div className="
                w-full 
                max-w-md 
                bg-cyan-900
                bg-opacity-30 
                backdrop-blur-md 
                rounded-2xl 
                shadow-2xl 
                p-8 
                space-y-6
            ">
                <h1 className="text-3xl font-bold text-center text-white mb-6">Login</h1>
                
                <form onSubmit={(e) => handleLogin(e, email, password)} className="space-y-4">
                    <div className="space-y-2">
                        <label 
                            htmlFor="email" 
                            className="block text-sm font-medium text-white"
                        >
                            Email
                        </label>
                        <input
                            id="email"
                            onChange={(e) => setEmail(e.target.value)}
                            className="
                                bg-white/10
                                text-white
                                w-full 
                                px-3 
                                py-2 
                                border 
                                border-[#a5b8cb] 
                                rounded-xl 
                                focus:outline-none 
                                focus:ring-2 
                                focus:ring-[#a5b8cb]/50 
                                transition 
                                duration-300
                            "
                            type="email"
                            required
                        />
                        {errorEmail && (
                            <p className="text-red-500 text-sm mt-1">{errorEmail}</p>
                        )}
                    </div>
                    
                    <div className="space-y-2">
                        <label 
                            htmlFor="password" 
                            className="block text-sm font-medium text-white"
                        >
                            Password
                        </label>
                        <input
                            id="password"
                            onChange={(e) => setPassword(e.target.value)}
                            className="
                            bg-white/10
                                text-white
                                w-full 
                                px-3 
                                py-2 
                                border 
                                border-[#a5b8cb] 
                                rounded-xl 
                                focus:outline-none 
                                focus:ring-2 
                                focus:ring-[#a5b8cb]/50 
                                transition 
                                duration-300
                            "
                            type="password"
                            required
                        />
                        {errorPassword && (
                            <p className="text-red-500 text-sm mt-1">{errorPassword}</p>
                        )}
                    </div>

                    {error && (
                        <p className="text-red-500 text-sm text-center">{error}</p>
                    )}

                    <button 
                        type="submit"
                        className="
                            w-full 
                            px-4 
                            py-2 
                            bg-[#a5b8cb] 
                            bg-opacity-80 
                            text-white 
                            rounded-full 
                            hover:bg-opacity-90 
                            transition 
                            duration-300 
                            ease-in-out 
                            focus:outline-none 
                            focus:ring-2 
                            focus:ring-[#a5b8cb]/50
                        "
                    >
                        Connexion
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Login