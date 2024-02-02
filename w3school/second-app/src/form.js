import { useState } from 'react';
import Login from "./login";

const Forms = () => {
    
    const  [name,setName] = useState("");

    return ( 
        <div>
            <Login  name={name} setName={setName}/>
        </div>
     );
}
 
export default Forms;