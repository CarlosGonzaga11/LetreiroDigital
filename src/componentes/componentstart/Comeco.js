import react from "react";
import {Link} from 'react-router-dom';
import "./comeco.css";
function Comeco() {
  return (
    <div className="container-start">
      <div className="container-titulo">
        <div className="titulo">
         <marquee>
         <strong>LETREIRO DIGITAL</strong>
           </marquee> 
        </div>
      </div>
    <Link to="/input">
    <button className="btn-start">
        Start
      </button>
    </Link>
  
    </div>
  );
}

export default Comeco;
