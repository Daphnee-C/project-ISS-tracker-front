import { useState } from "react";
import axios from "axios";


const Register = () => {
    const [formRegister, setFormRegister] = useState({
        first_name : "",
        last_name : "",
        email : "",
        password : "",
    });

    const  [error, setError] = useState("");

    const handleRegister = async (e) => {
        e.preventDefault()
        setError('')
        
        try {
            const response = await axios.post('http://localhost:8000/api/register', formRegister);

            if(response.status === 201) {
                alert('Account is created');
            }
        } catch (error) {
            if(error.response.status === 401){
                setError('Email already exist, please enter a new one.')
            }else if (error.response.status === 500) {
                setError('Internal server error, please try later.')
            }
        }
    }
    
    return (
        <main className="flex flex-col gap-4 items-center">
            <h1 className="py-4 text-2xl font-semibold">Register</h1>
            <form onSubmit={handleRegister} className="flex flex-col gap-2 w-96">
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