import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext.jsx";


const Register = () => {

    const {handleRegister, error} = useContext(AuthContext)

    const [formRegister, setFormRegister] = useState({
        first_name : "",
        last_name : "",
        email : "",
        password : "",
    });

    return (
        <main className="flex flex-col gap-4 items-center">
            <h1 className="py-4 text-2xl font-semibold">Register</h1>
            <form onSubmit={(e) => handleRegister(e, formRegister)} className="flex flex-col gap-2 w-96">
                <div className="flex flex-col gap-2">
                    <label htmlFor="firstname">Firstname</label>
                    <input
                        id="firstname"
                        onChange={(e) => setFormRegister({...formRegister, first_name : e.target.value})}
                        className="border border-zinc-900 rounded-md py-1"
                        type="text"
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="lastname">Lastname</label>
                    <input
                        id="lastname"
                        onChange={(e) => setFormRegister({...formRegister, last_name : e.target.value})}
                        className="border border-zinc-900 rounded-md py-1"
                        type="text"
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        onChange={(e) => setFormRegister({...formRegister, email : e.target.value})}
                        className="border border-zinc-900 rounded-md py-1"
                        type="email"
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="password">Password</label>
                    <input
                        id="password"
                        onChange={(e) => setFormRegister({...formRegister, password : e.target.value})}
                        className="border border-zinc-900 rounded-md py-1"
                        type="password"
                    />
                </div>
                {error && <p className="text-sm text-red-500">{error}</p>}
                <button type="submit" className="bg-blue-500 rounded-md py-2 text-white mt-5">Connexion</button>
            </form>
        </main>
    )
};

export default Register;