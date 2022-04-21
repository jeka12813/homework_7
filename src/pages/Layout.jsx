import React from "react";
import { useContext } from "react"
import { NavLink, Outlet, useNavigate } from "react-router-dom"
import '../App.css'
import { AuthContext, TheamContext } from "../context"
import { CustomLink } from "./CustomLink"

const setActive= ({isActive})=>isActive? "customLink" : "white"


export const Layout=()=>{

const {isAuth,setIsAuth}=useContext(AuthContext)
const navigate=useNavigate()

const logout =(event)=>{
    event.preventDefault()
    setIsAuth(false)
    navigate('/', {replace:false})
    localStorage.removeItem('auth')
}

const {theam, setTheam}=useContext(TheamContext)


const chengeValue=(event)=>{
    setTheam(event.target.value);
   
}

    return(
        <div>
            <header>
                <CustomLink  to="/">Home</CustomLink>
                <NavLink className={setActive} to="/about">About</NavLink>
                <NavLink className={setActive} to="/posts">Posts</NavLink>
               <div className="theam">
                Выберите тему:
                   <label htmlFor="white">cветлая</label>
               <input  id="white" type="radio" name="radio" value="white"
         
                onChange={chengeValue} />
                <label htmlFor="black">темная</label>
                <input id="black" type="radio" name="radio" value="rgba(81, 71, 71, 0.458)"
              
                onChange={chengeValue} />
               </div>
                <button onClick={logout}>Log out</button>
            </header>
            <main>
                <Outlet/>
            </main>           

        </div>
    )
}