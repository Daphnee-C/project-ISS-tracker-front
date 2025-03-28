import { createContext, useState, useEffect } from "react";
import axios from 'axios';
import { useNavigate } from "react-router";

export const AuthContext = createContext(null);

export const AuthController = ({children}) => {

    let navigate = useNavigate();

    const [isLogged, setIsLogged] = useState(false);

    const [errorEmail, setErrorEmail] = useState("");
    const [errorPassword, setErrorPassword] = useState("");
    const [error, setError] = useState("");

    useEffect(() => {
        const userToken = localStorage.getItem('userToken');

        if(userToken){
            setIsLogged(true)
        }
    }, [])

    const handleRegister = async (e, formRegister) => {
        e.preventDefault()
        setError("")
        
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

    const handleLogin = async (e, email, password) => {

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
                setIsLogged(true)
                navigate('/');
            }

        } catch (err) {
            if(err.response.status === 404) {setError (`Incorrect email or password`)}
            else if (err.response.status === 500) {setError (`Internal server error`)}

        }
    
    }

    const handleLogout = () => {

        try {
            localStorage.removeItem('userToken');
            setIsLogged(false)
            navigate('/');
        } catch (error) {
            alert('An error has occurred, please try again later.')
        }
    }

    return (
        <AuthContext.Provider value={{handleRegister, handleLogin, handleLogout, error, errorEmail, errorPassword, isLogged}}>
            {children}
        </AuthContext.Provider>
    )
}

