import React, { Component } from 'react';
import jwtDecode from 'jwt-decode';
import { render } from 'react-dom';
import { Switch, Route } from 'react-router-dom';
import { Redirect } from 'react-router';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Services from './components/Services/Services';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';


class App extends Component {
    state = { 
      user: ''
     }
     
     componentDidMount() {
       const jwt= localStorage.getItem('token');
        try{
          const user = jwtDecode(jwt)
          this.setState({user});
        }catch{

        }
  }

  render() { 
    const user = this.state.user;
    return ( 
      
      <div className = "App">
            <NavBar user = {user}/>   
            <Switch>
                <Route
                path ='/home'
                render = {props => {
                    if (!user){
                        return <Redirect to ="/login"/>
                    }else{
                        return <Services />
                    }
                }}
                />
                {/* <Route path="/garage" render={props => <ProductList {...props} user={this.state.user}/>}/> */}
                <Route path="/login" component={Login}/>
                <Route path="/register" component={Register}/>
                <Route path="/services" component={Services}/>

            </Switch> 
        </div>
        )
    }
}
export default App;
