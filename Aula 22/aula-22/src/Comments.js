import Comment from "./comment"
import {useEffect, useState} from "react"
import axios from "axios"

const Comments = () =>{
    const [comments, setComments] = useState([])

    useEffect(()=>{
        const getComment = async () =>{
            const {data:comments} = await axios.get('http://jsonplaceholder.typicode.com/comments')
            setComments(comments)
            console.log("array: ", comments)
        }
        getComment();
    },[])

    return(
        <div>
           <h1>Comentarios</h1>
            {comments.map((com)=>{
                return(
                    <div key={com.id}>  
                        <Comment body={com.body} email={com.email} name={com.name}/> 
                    </div>
                )
            })}
        </div>
    )
}
export default Comments