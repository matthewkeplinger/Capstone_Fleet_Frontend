import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import ImageUploader from '../ImageUploader/ImageUploader';

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
          <div class="card text-white bg-secondary mb-3" style= {{maxWidth: 340}}>
            <div class="card-header"><h4 class = "card-title">Add a Vehicle</h4></div>
              <div class="card-body">
                  <ul class="list-group">
                      <form className="form" onSubmit={this.handleSubmit}>
                        <li><label>Year</label></li>
                          <input name="vehicleYear" onChange={this.handleChange} value={this.state.vehicleYear}/>
                        <li><label>Make</label></li>
                          <input name="vehicleMake" onChange={this.handleChange} value={this.state.vehicleMake}/>
                        <li><label>Model</label></li>
                          <input name="vehicleModel" onChange={this.handleChange} value={this.state.vehicleModel}/>
                        <li><label>Color</label></li>
                          <input name="vehicleColor" onChange={this.handleChange} value={this.state.vehicleColor}/>
                        <li><label>License Plate</label></li>
                          <input name="vehicleLicensePlate" onChange={this.handleChange} value={this.state.vehicleLicensePlate}/>
                        <li><label>Mileage</label></li>
                          <input name="vehicleMileage" onChange={this.handleChange} value={this.state.vehicleMileage}/>
                        <li><label>VIN (Vehicle ID Number)</label></li>
                          <input name="vehicleVIN" onChange={this.handleChange} value={this.state.vehicleVIN}/>
                        <li><label>Maint. Cost to date</label></li>
                          <input name="vehicleMaintCost" onChange={this.handleChange} value={this.state.vehicleMaintCost}/>
                          <li><label>Image of Vehicle</label></li>
                        <br /><br />
                        <ul><button type = "submit" class = "btn btn-success">Add Vehicle to my Garage</button></ul>
                        <li class="list-group-item d-flex justify-content-between align-items-center"><Link to = {{pathname: '/garage'}}> Back to Garage </Link></li>
                      </form>
                      
                  </ul>
              </div>
          </div>
         );
    }
}
 
export default AddVehicle;