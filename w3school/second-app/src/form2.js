import { useState } from "react";
import Login2 from "./login2";

const Form2 = () => {
    const [name2,setName2] = useState("");

    const handleSubmit =(e) => {
        e.preventDefault();
        alert(`the name is : ${name2}`);
    }


    return ( 
        <div>
            <Login2 name2={name2} setName2={setName2} handleSubmit={handleSubmit}/>
        </div>
     );
}
 
export default Form2;