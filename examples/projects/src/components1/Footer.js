import React from "react";

const Footer = () => {
    const today = new Date();

    return ( 
        <footer>
            <p id="foot">
                Copyright &copy ;hour is : {today.getHours()} {today.getMinutes
                ()}  
            </p>
        </footer>
     );
}
 
export default Footer;