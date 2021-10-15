import { Link } from "react-router-dom";
import React from "react";
import Logout from "../Logout/Logout";

const NavBar = ({user}) => {
  return ( 
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <img src = '/ExhaustedAuto.png' alt="Exhausted Auto Logo" style={{width:80 }}/>
        </div>
      <ul className="navbar-nav me-auto">
      {user &&
          <React.Fragment>
            <Link to = '/garage'>
              <button type="button" className = "btn btn-link">
                <li className="nav-item" >My Garage</li>
              </button>
            </Link> 
            <Link to = '/services'>
              <button type="button" className = "btn btn-link">
                <li className="nav-item">Vehicle Services</li>
              </button>
            </Link>  
            <li><Logout/></li>
            </React.Fragment>
            }
        {!user && 
        <React.Fragment>
          
            <Link to = '/register'>
              <button type="button" className= "btn btn-link">
                <li className="nav-item" >Register</li>
              </button>
            </Link>  
            <Link to = '/Login'>
              <button type="button" class = "btn btn-link">
                <li className="nav-item">Login</li>
              </button>
            </Link>

        </React.Fragment>  
        }
        </ul>
    </nav>
   );
}

export default NavBar;