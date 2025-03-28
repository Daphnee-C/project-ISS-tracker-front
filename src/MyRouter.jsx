import {Routes, Route} from 'react-router'
import App from './App'
import Register from './pages/Register'
import Login from './pages/Login'
import NotFound from './pages/NotFound'
import IssMap from './pages/IssMap'
import NavBar from './components/NavBar'


const MyRouter = () => {
    return(
        <> 

    
        <NavBar/>
        <Routes>
            <Route path='/' element= {<App/>} /> 
            <Route path='/register' element= {<Register/>} />
            <Route path='/login' element= {<Login/>} />
            <Route path='/iss-map' element= {<IssMap/>} />
            <Route path='*' element= {<NotFound/>} />  
        </Routes>
        </>
    )
}


export default MyRouter