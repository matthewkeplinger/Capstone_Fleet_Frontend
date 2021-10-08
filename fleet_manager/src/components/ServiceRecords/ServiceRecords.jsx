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
        let response = await axios.get('http://127.0.0.1:8000/api/records/all/');
        this.setState({
            records: response.data
        });
        console.log(response.data)
    }

    render() { 
        return (
            
            <div>
                <table class = "table table-hover">
                    <thead>
                        <tr>
                            <th scope = 'col'>Vehicle:</th>
                            <th scope = 'col'>Service:</th>
                            <th scope = 'col'>Mileage Performed</th>
                            <th scope = 'col'>Date Performed:</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.records.map((record)=> {
                            return (
                                <tr class = "table-primary" key = {record.id}>
                                    <td>{record.vehicle_id}</td>
                                    <td>{record.service_id}</td>
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