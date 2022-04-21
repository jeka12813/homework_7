
import { useContext } from "react"
import { useParams } from "react-router-dom"
import { TheamContext } from "../context"


export const PostEdit=()=>{
const {id}=useParams()
let { theam, setTheam } = useContext(TheamContext)
return(
    <div className="container" style={{ textAlign: "center", height:"100vh"}}>  
        <h1>Edit this post {id}</h1>
    </div>
)
}