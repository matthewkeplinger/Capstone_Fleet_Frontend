import React, { Component } from 'react';
import axios from 'axios';

class GarageServiceReminder extends Component {
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
        if (response.data) {
            let recordsToFilter = response.data
            let vehicleID = this.props.vehicleID
            let mileage = this.props.vehicleMileage
            let recordSet = recordsToFilter.filter((record) => record.vehicle_id === vehicleID)
            console.log('recordSet', recordSet)
            recordSet.map((record) => {
                console.log("internal map function", record.mileage_performed)
                let vehicleServiceInterval = mileage - record.mileage_performed
                console.log('vehicleServiceInterval value:', vehicleServiceInterval)
                if (vehicleServiceInterval > record.mileage_interval){
                    this.setState({
                        requiredServices: [...this.state.requiredServices, record.service_type]
                    })
                    console.log('this.state.requiredServices', this.state.requiredServices)
                    return record.service_type;
                }
            })
            
            let requiredServices = this.state.requiredServices
            console.log('ServiceReminder Required Services' ,requiredServices)
        }
    }
    
    render() { 

        return ( 
            <div>
                {this.state.requiredServices.map((record)=> {
                return (          
                        <span class = "badge rounded-pill bg-warning "><h6>{record}</h6></span>
                );
            })}
            </div>
        );
    }
}
 
export default GarageServiceReminder;
	