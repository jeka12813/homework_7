
import React, { useContext, useEffect, useState } from "react";
import {  Link, useLocation, useNavigate, useParams } from "react-router-dom"

import "../App.css"
import { MyButton } from "../components/UI/MyButton"
import { TheamContext } from "../context"


export const PostIdPage=()=>{
    const [post, setPost] =useState({})


    const {id}  = useParams()
    console.log(useParams())

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(response=>response.json())
        .then(data=>setPost(data))
    }, [id])

    
    const [postsTitle, setPostsTitle] = useState()

    useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((data) => setPostsTitle(data.map(post=>
            
        <Link 
        className="postsTitle"
         key={post.id}to={`/posts/${post.id}`}>
        {post.title}
        </Link>
      
        )
        ))
    }, [])

    
  
    console.log(postsTitle)


    console.log(id)
    console.log(post)


    const navigate=useNavigate()
    console.log(navigate)

    const goBack=()=>{
        navigate(-1)
    }
    const goHome=()=>{
        navigate("/ ", {replace:true})
    }

    const location= useLocation()
    console.log(location)

    let { theam, setTheam } = useContext(TheamContext)
    return(
        <div className="container">  
            <div className="infoPost">              
                <h2> Пост № {id}</h2>                
                <div className="infoPost__inner">              
                    <h3>{post.title}</h3>
                    <div>{post.body}</div>  
                    <Link  style={{textDecoration:"none", color:"red", fontSize:"16px"}} to={`/posts/${id}/edit`}>Edit✎</Link>
                </div>
                <div className="another">
                    См. также другие посты:<br/>
                    <div className="anotherPosts">
                        {postsTitle}
                    </div>
                </div>
                               
                <div style={{textAlign:"center"}}>
                <MyButton  style={{margin:"0 10px"}} onClick={goBack}>Back</MyButton>
                <MyButton style={{margin:"0 10px"}}  onClick={goHome}>Home</MyButton>
                </div>
            </div>
        </div>
    )
}



