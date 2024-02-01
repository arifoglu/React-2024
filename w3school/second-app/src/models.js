const Models = (props) => {
    return ( 
        <div>
            <p>{props.title}</p>
            <p>{props.carInfo.name} {props.carInfo.model}</p> 
            <button onClick={ () => props.change("jaguar") }>change</button>        
        </div>
    );
}
 
export default Models;
