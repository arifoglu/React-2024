const Models3 = (props) => {
    return ( 
        <div>
         <p>garage list </p>  
         <ul key={props.brands.id}>
            {props.brands.map((brand)=> 
             <li>{brand.name}</li>
            )}
         </ul>
         <ul>
            <li>{props.brands[0].name }</li>
            <li>{props.brands[1].name }</li>
            <li>{props.brands[2].name }</li>
         </ul>
        </div>
     );
}
 
export default Models3;