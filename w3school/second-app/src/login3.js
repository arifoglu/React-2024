const Login3 = (props) => {
    return ( 
        <form onSubmit={props.handleSubmit2} >
            <label>Enter your name :
                <input type="text" value={props.inputs.username || ""} name="username" onChange={props.handleChange}/>
            </label> <br />
            <label>Enter your age :
                <input type="text"  value={props.inputs.age || ""} name="age" onChange={props.handleChange}/>
            </label><br />
            <input type="submit" />
        </form>
     );
}
 
export default Login3;