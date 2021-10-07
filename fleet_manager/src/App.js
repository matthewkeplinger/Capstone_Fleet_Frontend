import React, { Component } from 'react';
import jwtDecode from 'jwt-decode';
// import axios from 'axios';
// import { render } from 'react-dom';
// import { Switch, Route } from 'react-router-dom';
// import { Redirect } from 'react-router';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Logout from './components/Logout/Logout';
import Services from './components/Services/Services';

class App extends Component {
    state = { 
      user: ''
     }


     
     componentDidMount() {
       const jwt= localStorage.getItem('token');
        try{
          const user = jwtDecode(jwt)
        }catch{

        }
  }

  render() { 
    //const user = this.state.user;
    return ( 
      <div className = "App">
        <Services />
        {/* <Login />
        <Register />
        <Logout /> */}
            {/* <NavBar className="navbar" user = {user}/>    */}
            {/* <Switch>
                <Route
                path ='/home'
                render = {props => {
                    if (!user){
                        return <Redirect to ="/login"/>
                    }else{
                        return <Home {...props} user = {user} />
                    }
                }}
                />
                {/* <Route path="/products" render={props => <ProductList {...props} user={this.state.user}/>}/>
                <Route path="/login" component={Login}/>
                <Route path="/register" component={Register}/>
                <Route path="/user_home" component={BuyerHome}/>
                <Route path="/productsform" component={ProductsForm}/>
                <Route path="/product_description" component={ProductDescription}/>
                <Route path="/shopping_cart" render={props => <ShoppingCart {...props} user={this.state.user}/>}/>
                <Route path="/checkout" component={CheckOut}/> */}
            {/* </Switch> */} 
        </div>
        )
    }
}
export default App;
