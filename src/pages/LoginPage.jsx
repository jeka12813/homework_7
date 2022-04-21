import { useContext } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { MyInput } from "../components/UI/MyInput"
import { AuthContext } from "../context"



export const LoginPage =()=>{

const {isAuth,setIsAuth}=useContext(AuthContext)


const navigate=useNavigate()
const location=useLocation()


const formPage=location.state?.from?.pathname || '/'

const login =(event)=>{
    event.preventDefault()
    setIsAuth(true)
    navigate(formPage,{replace:true})
    localStorage.setItem("auth","true")
}
    return(
        <div className="container">
            <div className="loginPage">
            <h3>Страница для логина</h3>
            {<form className="loginForm" onSubmit={login}>
                <MyInput type="text" placeholder="введите логин"/>
                <MyInput type="text" placeholder="введите пароль"/>
                <button>Log in</button>                
                </form>}
                <div style={{textAlign:"center"}}>{formPage}</div>
                </div>
        </div>
    )
}