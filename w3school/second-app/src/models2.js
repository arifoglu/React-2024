const Models2 = (props) => {
    return ( 
        <>
          <p>{props.marques}</p>
          <p>
            {props.marques.length > 2 && <span>you have {props.marques.length} cars</span> } 
          </p>
        </>
     );
}
 
export default Models2;