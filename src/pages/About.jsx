import React, { useContext } from "react";
import { Link, Outlet, Route, Routes } from "react-router-dom"

import { TheamContext } from "../context"


export const About=()=>{
    let { theam, setTheam } = useContext(TheamContext)
    return(
        <div className="container" style={{ height: "100vh" }}>  
             <div className="about">
            <h2>About page</h2>
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                <ul style={{listStyle: "none"}}>
                    <li>
                        <Link style={{textDecoration:"none"}} to="contacts">Our contacts</Link>
                    </li>
                    <li>
                        <Link style={{textDecoration:"none"}}  to="team">Our team</Link>
                    </li>
                </ul>   
                <Outlet/>         
            </div>
            
        </div>
       
    )
}