import React, { Component } from 'react';
import axios from 'axios';

class ServiceReminder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            records:[],
            filteredRecords: [],
            requiredServices:[]
          }
    }

    componentDidMount(){
        this.getAllServiceRecords();
    }


    async getAllServiceRecords() {
        let response = await axios.get('http://127.0.0.1:8000/api/v1/vehicleViewSet/');
        this.setState({
            records: response.data
        });
    }
    
    //Bring in vehicle mileage and the mileage from the service record, then compare the difference to the service interval
    //if interval is smaller, inform user that the service is required
    mileageCheck(mileage, recordSet){
        console.log("Mileage Check method")
        console.log("Mileage In:", mileage)
        console.log("RecordSet In:", recordSet)
        console.log("recordSet Index 0:", recordSet[0])
        let requiredServices = this.state.requiredServices
        //somehow loop over set


        let vehicleServiceInterval = parseInt(mileage) - parseInt(recordSet.mileage_performed)
        console.log('vehicleServiceInterval value:', vehicleServiceInterval)
        if (vehicleServiceInterval > recordSet.mileage_interval){
            //Need to do something here,
            requiredServices.push(recordSet.service_type)
            
        }

    }

    render() { 

        
        //Filter the returned records by vehicle_id and return the values that match the props.vehicleID passed in from vehicle details
        let recordsToFilter = this.state.records
        let vehicleID = this.props.vehicleID
        let vehicleMileage = this.props.vehicleMileage

        let filteredRecords = recordsToFilter.filter((record) => record.vehicle_id === vehicleID)

        //Call mileage check to see if vehicle mileage-mileage the service was performed is greater than the service interval
        this.mileageCheck(vehicleMileage, filteredRecords)
        
        let requiredServices = this.state.requiredServices
        console.log('ServiceReminder Required Services' ,requiredServices)

        return ( 
            <div>
                <h4>Services Required</h4>
                <table class = "table table-hover">
                    <thead>
                        <tr>
                            <th scope = 'col'>Service:</th>
                            <th scope = 'col'>Service Cost</th>
                            <th scope = 'col'>Interval between services</th>
                        </tr>
                    </thead>
                    <tbody>
                        {requiredServices.map((record)=> {
                            return (
                                <tr class = "table-primary" key = {record.id}>
                                    <td>{record.service_type}</td>
                                    <td>${record.service_cost}.00</td>
                                    <td>{record.mileage_interval} miles</td> 
                                </tr> 
                            );
                        })}
                    </tbody>
                </table> 
            </div>
        );
    }
}
 
export default ServiceReminder;
	