import { useState } from 'react';
import Login3 from "./login3";

const Form3 = () => {
    const [inputs,setInputs] = useState({});

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInputs(values => ({...values,[name]:value}))
    };

    const handleSubmit2 = (e) => {
        e.preventDefault();
        alert(inputs);
    };


    return ( 
        <div>
            <Login3 inputs={inputs} setInputs={setInputs} handleSubmit2={handleSubmit2} handleChange={handleChange}/>
        </div>
     );
}
 
export default Form3;