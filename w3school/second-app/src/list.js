import Grocerylist from "./grocerylist";

const List = () => {

    const items = [
        {id: 1, name: 'bread'},
        {id: 2, name: 'milk'},
        {id: 3, name: 'eggs'}
      ];

    return ( 
        <Grocerylist items={ items } />
     );
}
 
export default List;