import React from "react";
import { Link, useMatch } from "react-router-dom"
import "../App.css"


export const CustomLink=({children ,to, ...props})=>{
    const match=useMatch(to)
    
const styleForLink = match ? "customLink" : "white"

    return(
        <div>
            <Link to={to} {...props} 
            className={styleForLink}
            >
            {children}
            </Link>

        </div>
    )
}