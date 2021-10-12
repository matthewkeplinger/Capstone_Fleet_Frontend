import React, { Component } from 'react';
import axios from 'axios';

class ServiceRecords extends Component {
    constructor(props) {
        super(props);
        this.state = { 
           records: []
         }
    }
    
    componentDidMount(){
        this.getAllServiceRecords();
    }

    //Get all services from DB and display in table for user with appropriate headers
    async getAllServiceRecords() {
        let response = await axios.get('http://127.0.0.1:8000/api/v1/vehicleViewSet/');
        this.setState({
            records: response.data
        });
        console.log(response.data)
        console.log(this.props.vehicleID)
    }

    render() { 
        let filteredRecords = this.state.records.filter(record => record.vehicle_id === this.props.vehicleID)
        console.log(filteredRecords)
        return (
            
            <div>
                <table class = "table table-hover">
                    <thead>
                        <tr>
                            <th scope = 'col'>Service:</th>
                            <th scope = 'col'>Mileage Performed</th>
                            <th scope = 'col'>Date Performed:</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.records.map((record)=> {
                            return (
                                <tr class = "table-primary" key = {record.id}>
                                    <td>{record.service_type}</td>
                                    <td>{record.mileage_performed}</td>
                                    <td>{record.date_performed}</td> 
                                </tr>    
                            );
                        })}
                    </tbody>
                </table>
            </div>
        );
    }
}
 
export default ServiceRecords;