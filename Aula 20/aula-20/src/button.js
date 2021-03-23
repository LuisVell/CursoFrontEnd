const Button = (props) =>{
    return <button onClick={props.handleClick} type="button">{props.text}</button>
}

export default Button