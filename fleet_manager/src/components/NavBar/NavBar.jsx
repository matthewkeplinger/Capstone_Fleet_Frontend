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
              <li class="nav-item" >My Garage</li>
            </Link> 
            <Link to = '/services'>
              <li class="nav-item">Services</li>
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
              <li class="nav-item" >Register</li>
            </Link>  
            <Link to = '/Login'>
              <li class="nav-item">Login</li>
            </Link>

        </React.Fragment>  
        }
        </ul>
    </nav>
   );
}

export default NavBar;