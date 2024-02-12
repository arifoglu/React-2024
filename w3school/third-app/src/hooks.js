import { useState } from "react";

const Hooks = () => {
    const [color,setColor] = useState ("yellow");
    const [car, setCar] = useState({
        brand: "Ford",
        model: "Mustang",
        year: "1964",
        color: "red"
      });
 
    return ( 
        <div>
            <h5>mycolor is {color} </h5>
            <button 
               type="button" 
               onClick={()=> setColor("blue")}
            >change</button>
            <p>{car.brand} {car.model} {car.year} {car.color}</p>
            <p>{setCar[0]= ("bmw")} {setCar[1]= ("x3")} {setCar[2]= ("1997")} {setCar[3]= ("grey")}</p>
            
        </div>
     );
}
 
export default Hooks;