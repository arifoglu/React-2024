import Models3 from "./models3";

const Cars3 = () => {

    const brands = [
        {id: 1, name: 'Ford'},
        {id: 2, name: 'BMW'},
        {id: 3, name: 'Audi'}
      ];

    return ( 
        <>
          <Models3 brands={ brands } />
        </>
     );
}
 
export default Cars3;