import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './AddService.css'


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
        const jwt= localStorage.getItem('token');
        await axios.post(`http://127.0.0.1:8000/api/services/`, newService, { headers: {Authorization: 'Bearer ' + jwt}}).then(response => {alert("Service Added to Available Services List")})
    }
    render() { 
        return (
          <div class = "wrapperAddService">
            <div class="card text-white bg-secondary mb-3" style= {{maxWidth: 270}}>
            <div class="card-header"><h4 class = "card-title">Add a Service</h4></div>
              <div class="card-body">
                  <ul class="list-group">
                    <form className="form" onSubmit={this.handleSubmit}>
                    <ul><label>Service Type</label></ul>
                    <input name="serviceName" onChange={this.handleChange} value={this.state.serviceName}/>
                    <ul><label>Service Cost</label></ul>
                    <input name="serviceCost" onChange={this.handleChange} value={this.state.serviceCost}/>
                    <ul><label>Parts Used</label></ul>
                    <input name="partUsed" onChange={this.handleChange} value={this.state.partUsed}/>
                    <ul><label>Service Interval</label></ul>
                    <input name="serviceInterval" onChange={this.handleChange} value={this.state.serviceInterval}/><br /><br />
                    <ul><button type = "submit" class = "btn btn-success">Add Service to List</button></ul>
                    <ul class="list-group-item d-flex justify-content-between align-items-center"><Link to = {{pathname: '/services'}}> Back to Services </Link></ul>
                    </form>
                </ul>
            </div>
            </div>
          </div> 

         );
    }
}
 
export default AddService;