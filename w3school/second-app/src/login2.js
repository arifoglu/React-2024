const Login2 = (props) => {
    return ( 
        <div>
            <form onSubmit={props.handleSubmit}>
               <label>Enter your name:
                <input type="text" value={props.name2} onChange={(e) => props.setName2(e.target.value)}/>
              </label>
              <input type="submit" />
            </form>
        </div>
     );
}
 
export default Login2;