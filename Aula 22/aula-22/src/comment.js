const Comment = (props) =>{    
    return(
        <div>
            <h2>{props.email}</h2>
            <h5>{props.name}</h5>
            <p>{props.body}</p>
        </div>
    )
}
export default Comment