import { Link } from "react-router-dom";
import React from "react";
import Logout from "../Logout/Logout";
// import './NavBar.css';

const NavBar = ({user}) => {
  return ( 
    <nav className="navigationWrapper">
      <div class="logoWrapper">
      <span class="stylish">Shade Tree Garage</span>
      
  </div>
  <ul class="navigation">
      {user &&
          <React.Fragment>
            <h4>Welcome {user.username}!     </h4>
            {/* <Link to = '/garage'>
              <li class="parent" >My Garage</li>
            </Link>  */}
            <Link to = '/services'>
              <li class="parent">Services</li>
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
              <li class="parent" >Register</li>
            </Link>  
            <Link to = '/Login'>
              <li class="parent">Login</li>
            </Link>

        </React.Fragment>  
        }
        </ul>
    </nav>
   );
}

export default NavBar;