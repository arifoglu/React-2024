
const Login = (props) => {
    return ( 
        <div>
           <form>
               <label>Enter your name:
                 <input type="text" value={props.name} onChange={(e)=> props.setName(e.target.value)}/>
                 <p>{props.name}</p>
               </label>
            </form>
        </div>
     );
}
 
export default Login;