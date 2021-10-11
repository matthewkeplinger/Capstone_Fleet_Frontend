import React, { Component } from 'react';
import jwtDecode from 'jwt-decode';
// import { render } from 'react-dom';
import { Switch, Route } from 'react-router-dom';
import { Redirect } from 'react-router';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Services from './components/Services/Services';
import AddService from './components/Services/AddService';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import Garage from './components/Garage/Garage';
import VehicleDetails from './components/VehicleDetail/VehicleDetail';
import AddVehicle from './components/AddVehicle/AddVehicle';



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
                path ='/'
                exact
                render = {props => {
                    if (!user){
                        return <Redirect to ="/login"/>
                    }else{
                        return <Home />
                    }
                }}
                />
                <Route exact path="/garage" component={Garage}/>
                <Route exact path="/add_vehicle" component={AddVehicle}/>
                <Route exact path="/add_service" component={AddService}/>
                <Route exact path="/home" component={Home}/>
                <Route exact path="/login" component={Login}/>
                <Route exact path="/register" component={Register}/>
                <Route exact path="/services" component={Services}/>
                <Route exact path="/vehicle_details" component={VehicleDetails}/>
            </Switch> 
        </div>
        )
    }
}
export default App;
