import React, { Component } from 'react';
import axios from 'axios';

class ServiceRecords extends Component {
    constructor(props) {
        super(props);
        this.state = { 
           records: [],
           filteredRecords:[],
           totalCost: 0
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
    }

    render() { 
        //Filter the returned records by vehicle_id and return the values that match the props.vehicleID passed in from vehicle details
        let recordsToFilter = this.state.records
        let vehicleID = this.props.vehicleID
        let filteredRecords = recordsToFilter.filter((record) => record.vehicle_id === vehicleID)
        console.log('Filtered Records:', filteredRecords)
        let totalMaintCost = filteredRecords.reduce((total, CurrentValue) => total=total + CurrentValue.service_cost,0)
        console.log("Total Maint Cost: ", totalMaintCost)
        return (
            
            <div>
                <h4>Total Maintenance Cost to Date: ${totalMaintCost}.00</h4>
                <h8>*Maintenance cost is reflected over duration of vehicle ownership</h8>
                <br /><br />
                <h4>Service History</h4>
                <table class = "table table-hover">
                    <thead>
                        <tr>
                            <th scope = 'col'>Service:</th>
                            <th scope = 'col'>Mileage Performed</th>
                            <th scope = 'col'>Date Performed:</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredRecords.map((record)=> {
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