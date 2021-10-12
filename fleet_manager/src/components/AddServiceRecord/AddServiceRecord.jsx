import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './AddServiceRecord.css'


class AddServiceRecord extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            vehicleID: this.props.vehicleID,
            serviceID: 0,
            mileagePerformed: 0,
            datePerformed: '',
            services : []
         }
    }
    componentDidMount(){
        this.getAllServices();
    }

    //Get all services from DB and display in table for user with appropriate headers
    async getAllServices() {
        let response = await axios.get('http://127.0.0.1:8000/api/services/all/');
        this.setState({
            services: response.data
        });
        console.log(" AddServiceRecord: " ,this.state.services)
        console.log("Vehicle ID", this.state.vehicleID)
    }

    handleChange=(event) =>{
        this.setState ({
          [event.target.name]: event.target.value,
        });
      };
    
      //create service in DB
      handleSubmit=(event) =>{
        event.preventDefault();
        let aServiceRecord ={
          'vehicle_id' : this.state.vehicleID,
          'service_id': this.state.serviceID,
          'mileage_performed': this.state.mileagePerformed,
          'date_performed': this.state.datePerformed,
  
        }  
        // Post user to DB via function, axios call
            console.log("Data to submit:", aServiceRecord)
          this.addNewRecord(aServiceRecord)
      };
    
      async addNewRecord(newRecord){
        const jwt= localStorage.getItem('token');
        await axios.post(`http://127.0.0.1:8000/api/records/`, newRecord, { headers: {Authorization: 'Bearer ' + jwt}}).then(response => {alert("Service Record Created")})
        this.getAllServices();
    }
    render() { 
        return (
          <div class = "wrapperAddService">
            <div class="card text-white bg-secondary mb-3" style= {{maxWidth: 270}}>
            <div class="card-header"><h4 class = "card-title">Add a Service Record</h4></div>
              <div class="card-body">
                  <ul class="list-group">
                    <form className="form" onSubmit={this.handleSubmit}>
                    <ul><label>Choose a Service:</label></ul>
                    <ul><select name="serviceID" onChange={this.handleChange} value={this.state.serviceID}>
                                    {this.state.services.map(service=>
                                        <option value={service.id}>{service.service_type}</option>
                                    )};
                    </select>  
                    </ul>
                    <ul><label>Mileage Performed</label></ul>
                    <input name="mileagePerformed" onChange={this.handleChange} value={this.state.mileagePerformed}/>
                    <ul><label>Date Performed</label></ul>
                    <input type='date' name="datePerformed" onChange={this.handleChange} value={this.state.datePerformed}/><br /><br />
                    <ul class = "list-group"><button type = "submit" class = "btn btn-success">Add Service Record</button></ul>
                    </form>
                </ul>
            </div>
         </div>
         </div>


         );
    }
}
 
export default AddServiceRecord;