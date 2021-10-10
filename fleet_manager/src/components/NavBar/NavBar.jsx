import { Link } from "react-router-dom";
import React from "react";
import Logout from "../Logout/Logout";
// import './NavBar.css';

const NavBar = ({user}) => {
  return ( 
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div class="container-fluid">
          <span class="stylish">Exhausted Auto, your personal Auto Assistant</span>
      </div>
  <ul class="navbar-nav me-auto">
      {user &&
          <React.Fragment>
            <Link to = '/garage'>
              <button type="button" class = "btn btn-link">
                <li class="nav-item" >My Garage</li>
              </button>
            </Link> 
            <Link to = '/services'>
              <button type="button" class = "btn btn-link">
                <li class="nav-item">Vehicle Services</li>
              </button>
            </Link>  
            {/* <Link to = '/shopping_cart'>
              <li class="parent">ShoppingCart</li>
            </Link> */}
            <li><Logout/></li>
            </React.Fragment>
            }
        {!user && 
        <React.Fragment>
          
            <Link to = '/register'>
              <button type="button" class= "btn btn-link">
                <li class="nav-item" >Register</li>
              </button>
            </Link>  
            <Link to = '/Login'>
              <button type="button" class = "btn btn-link">
                <li class="nav-item">Login</li>
              </button>
            </Link>

        </React.Fragment>  
        }
        </ul>
    </nav>
   );
}

export default NavBar;