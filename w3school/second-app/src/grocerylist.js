const Grocerylist = (props) => {
    return ( 
        <>
           <div key={props.items.id}>
               {props.items.map((item)=> 
               <li>{item.name}</li>
               )}
           </div>
           <div>
              <ul>
                <li>{props.items[0].name}</li>
                <li>{props.items[1].name}</li>
                <li>{props.items[2].name}</li>
              </ul>
           </div>
        </>
     );
}
 
export default Grocerylist;