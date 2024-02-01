import Models from "./models";

const Cars = () => {
    
   const carInfo = { name: "Ford", model: "Mustang" };
   
   function change(newmodel) {
      console.log("change this model with",newmodel);
   }

    return ( 
    
       <div>
          <Models title= "new list" carInfo={carInfo} change={change}/>      
       </div>
     );
}
 
export default Cars;