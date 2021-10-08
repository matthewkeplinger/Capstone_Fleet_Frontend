import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


class AddVehicle extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            vehicleMake: '',
            vehicleModel: '',
            vehicleColor : '',
            vehicleLicensePlate: '',
            vehicleVIN: '',
            vehicleYear: 0,
            vehicleMaintCost: 0,
            vehicleMileage: 0
         }
    }

    handleChange=(event) =>{
        this.setState ({
          [event.target.name]: event.target.value,
        });
      };
    
      //create service in DB
      handleSubmit=(event) =>{
        event.preventDefault();
        let aVehicle ={
          'make' : this.state.vehicleMake,
          'model': this.state.vehicleModel,
          'year': this.state.vehicleYear,
          'color': this.state.vehicleColor,
          'mileage': this.state.vehicleMileage,
          'license_plate': this.state.vehicleLicensePlate,
          'VIN': this.state.vehicleVIN,
          'maintenance_cost': this.state.vehicleMaintCost
  
        }  
        // Post user to DB via function, axios call
          this.addNewVehicle(aVehicle)
      };
    
      async addNewVehicle(newVehicle){
        const jwt= localStorage.getItem('token');
        await axios.post(`http://127.0.0.1:8000/api/vehicles/my-garage/`, newVehicle, { headers: {Authorization: 'Bearer ' + jwt}}).then(response => {alert("Vehicle added to Garage!")})
    }
    render() { 
        return ( 
            <div>
                <ul>
                    <form className="form" onSubmit={this.handleSubmit}>
                    <ul><label>Year</label></ul>
                    <input name="vehicleYear" onChange={this.handleChange} value={this.state.vehicleYear}/>
                    <ul><label>Make</label></ul>
                    <input name="vehicleMake" onChange={this.handleChange} value={this.state.vehicleMake}/>
                    <ul><label>Model</label></ul>
                    <input name="vehicleModel" onChange={this.handleChange} value={this.state.vehicleModel}/>
                    <ul><label>Color</label></ul>
                    <input name="vehicleColor" onChange={this.handleChange} value={this.state.vehicleColor}/>
                    <ul><label>License Plate</label></ul>
                    <input name="vehicleLicensePlate" onChange={this.handleChange} value={this.state.vehicleLicensePlate}/>
                    <ul><label>Mileage</label></ul>
                    <input name="vehicleMileage" onChange={this.handleChange} value={this.state.vehicleMileage}/>
                    <ul><label>VIN (Vehicle ID Number)</label></ul>
                    <input name="vehicleVIN" onChange={this.handleChange} value={this.state.vehicleVIN}/>
                    <ul><label>Maint. Cost to date</label></ul>
                    <input name="vehicleMaintCost" onChange={this.handleChange} value={this.state.vehicleMaintCost}/>
                    <ul><button type = "submit">Add Vehicle to my Garage</button></ul>
                    <ul><Link to = {{pathname: '/garage'}}> Back to Garage </Link></ul>
                    </form>
                </ul>
            </div>
         );
    }
}
 
export default AddVehicle;