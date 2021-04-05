// Prof. Erico utilizei o repositorio do Gabriel Ribeiro pra me guiar nesse desafio
//AULA 23 COMMIT CORRETO: Prof. dessa vez o tratamento de erro está acontecendo corretamente

import {useEffect, useState} from "react"
import axios from "axios"
import {useForm} from "react-hook-form"
import { toast } from 'react-toastify';



const CreatePost=()=>{
    const [posts, setPost] = useState([])
    const { register, handleSubmit } = useForm();

    const onSubmit = async (props) =>{
        props.userId = Number(props.userId)
        axios.post('https://jsonplaceholder.typicodse.com/posts', props)
        .then(function (response) {
            console.log(response);
            toast.success("Postado com sucesso!!")
        })
        .catch(function (error) {
            console.log(error);
            toast.error("Algo deu errado!")
        }) 
    }

    useEffect(()=>{
        const getPost = async () =>{
            const {data:posts} = await axios.get('http://jsonplaceholder.typicode.com/posts')
            setPost(posts)
            // console.log("array: ", posts)
        }
        getPost();
    },[])

    return(
        <div>
            <div>
            <a href='/'>Home</a>
                <h1>Criando post</h1>  
                <form onSubmit={handleSubmit(onSubmit)}>
                    <p>User ID:</p>
                    <input name="userId" ref={register}></input>
                    <p>Titulo:</p>
                    <input name="title" ref={register}></input>
                    <p>Conteudo:</p>
                    <textarea name="body" ref={register}></textarea>
                    <br></br>
                    <input type='submit'></input>
                </form>
            </div>

            {/* imprimindo os posts */}
            <div>
            <h1>Posts</h1>
                {posts.map((pos)=>{
                    return(
                        <div key={pos.id}>  
                            <h2>{pos.title}</h2>
                            <h5>{pos.userId}</h5>
                            <p>{pos.body}</p> 
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default CreatePost