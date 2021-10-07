import React, { Component } from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';

class AddService extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            serviceName: '',
            serviceInterval: 0,
            serviceCost: 0,
            partUsed: ''
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
        let aService ={
          'service_type' : this.state.serviceName,
          'mileage_interval': this.state.serviceInterval,
          'service_cost': this.state.serviceCost,
          'part_used': this.state.partUsed,
  
        }  
        // Post user to DB via function, axios call
          this.addNewService(aService)
      };
    
      async addNewService(newService){
        await axios.post(`http://127.0.0.1:8000/api/services/`, newService).then(response => {alert("Service Added to Available Services List")})
      }
    render() { 
        return ( 
            <div>
                <ul>
                    <form className="form" onSubmit={this.handleSubmit}>
                    <ul><label>Service Type</label></ul>
                    <input name="serviceType" onChange={this.handleChange} value={this.state.serviceType}/>
                    <ul><label>Service Cost</label></ul>
                    <input name="serviceCost" onChange={this.handleChange} value={this.state.serviceCost}/>
                    <ul><label>Parts Used</label></ul>
                    <input name="partUsed" onChange={this.handleChange} value={this.state.partUsed}/>
                    <ul><label>Service Interval</label></ul>
                    <input name="serviceInterval" onChange={this.handleChange} value={this.state.serviceInterval}/>
                    <ul><button type = "submit">Add Service to List</button></ul>
                    </form>
                </ul>
            </div>
         );
    }
}
 
export default AddService;