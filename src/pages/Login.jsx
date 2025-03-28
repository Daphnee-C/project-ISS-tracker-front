import { useState } from "react"
import  axios  from "axios"


const Login = () => {


    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errorEmail, setErrorEmail] = useState('')
    const [errorPassword, setErrorPassword] = useState('')
    const [error, setError] = useState('')


    const handleLogin = async (e) => {
        e.preventDefault () 
        setErrorEmail('')
        setErrorPassword('')
        setError('')
        try {
            if(!email) return setErrorEmail (`Please enter a mail adress`)
            if(!password) return setErrorPassword (`Please enter a password`)
            const response = await axios.post (`http://localhost:8000/api/login`, {email, password})
            if(response.status === 200) {
                const userToken = response.data.token
                localStorage.setItem('userToken', userToken)
            }
        } catch (err) {
            if(err.response.status === 404) {setError (`Incorrect email or password`)}
            else if (err.response.status === 500) {setError (`Internal server error`)}

        }
    
    }
    return (
        <main>
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
            <div>
                <label htmlFor="email">Email</label>
                <input id="email" onChange={e => setEmail(e.target.value)} className="border border-amber-400" type="email" />
                {errorEmail && <p>{errorEmail}</p>}
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input id="password" onChange={e => setPassword(e.target.value)} className="border border-amber-400" type="password" />
                {errorPassword && <p>{errorPassword}</p>}

            </div>

                {error && <p>{error}</p>}
            <button type="submit">Connexion</button>
            </form>  
        </main>
    )

}





export default Login