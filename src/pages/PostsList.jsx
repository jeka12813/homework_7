import React, { useContext, useEffect, useMemo } from "react";
import { useState} from "react";

import { Form } from "../components/Form/Form";


import { Posts } from "../components/Posts/Posts";

import { MyButton } from "../components/UI/MyButton";
import {PostService} from "../components/API/PostServer"
import { TheamContext } from "../context"
// import { useSearchParams } from "react-router-dom"
// import { MyInput } from "../components/UI/MyInput"

function PostsList() {   
  const [posts, setPosts]=useState([])
  const [selectedPost, setSelectedPost] =useState('')
  const [isModalActive, setIsModalActive] =useState(false)
  const [checkedMessage, setСheckedMessage] =useState('')
  const [isPostLoading, setIsPostLoading] = useState(false)

useEffect(()=>{
fetchData();
},[])

  const addPost = (post) =>{
    setPosts([post, ...posts])
    setIsModalActive(false)
  }

  const onClickDelete=(id)=>{
    let array=posts.filter((post) => post.id !== id)
    setPosts(array);   
  }

  const onChangeSelect=(sortValue)=>{
    setSelectedPost(sortValue)    
    let newPosts=[...posts].sort((a,b)=>a[sortValue].localeCompare(b[sortValue]))
    setPosts(newPosts)
}


    const showChekedMessage=(message)=>{  
    setСheckedMessage(message)  
    console.log(message)
  }

  async function fetchData(){
    setIsPostLoading(true)
    setTimeout(async()=>{
      const posts =await PostService.getAllPosts()
      setPosts(posts) 
      setIsPostLoading(false)
    },1000)
      
  }

  
  return (
    <div >
      <div className="container">      
        <div className="formCreate">
          <Form addPost={addPost}/>
        </div>
        <div className="checkedMessage">{checkedMessage}</div>  
          <div className="title" onClick={(event)=>onChangeSelect("title")}>Список постов:</div>  
        <div>
        {isPostLoading
        ?<div>LOADIND</div>
        :<div>
        {posts.length !=0
        ?<Posts posts={posts} onClickDelete={onClickDelete} showChekedMessage={showChekedMessage}/>
        :<h2>Список пуст</h2>
        } 
        </div>}
        </div>
              
       </div>            
    </div>
  );
}

export default PostsList;
