import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext.jsx";

const Login = () => {
    const { handleLogin, error, errorEmail, errorPassword } = useContext(AuthContext);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <main>
            <h1>Login</h1>
            <form onSubmit={(e) => handleLogin(e, email, password)}>
                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        onChange={(e) => setEmail(e.target.value)}
                        className="border border-amber-400"
                        type="email"
                    />
                    {errorEmail && <p>{errorEmail}</p>}
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input
                        id="password"
                        onChange={(e) => setPassword(e.target.value)}
                        className="border border-amber-400"
                        type="password"
                    />
                    {errorPassword && <p>{errorPassword}</p>}
                </div>

                {error && <p>{error}</p>}
                <button type="submit">Connexion</button>
            </form>
        </main>
    );
};

export default Login;
