import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h4>sorry</h4>
            <p>that page cannot be found</p>
            <Link to="/" >back to homepage...</Link>
        </div>
     );
}
 
export default NotFound;