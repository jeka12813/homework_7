import React from "react";
import { Link } from "react-router-dom"



export const NotFound=()=>{
    return(
        <div style={{ textAlign: "center", height:"100vh"}}>
            <h1>NotFound</h1>
            <Link to="/">Back Home</Link>
        </div>
    )
}