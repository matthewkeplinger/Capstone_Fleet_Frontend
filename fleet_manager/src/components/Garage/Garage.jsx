import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Image } from 'cloudinary-react';
import TechTips from '../TechTips/TechTips';
import GarageServiceReminder from '../GarageServiceReminder/GarageServiceReminder';


class Garage extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            vehicles: []
         }
    }

    componentDidMount(){
        this.getMyVehicles();
    }

    //Get all services from DB and display in table for user with appropriate headers
    async getMyVehicles() {
        const jwt= localStorage.getItem('token');
        let response = await axios.get('http://127.0.0.1:8000/api/vehicles/my-garage/',{ headers: {Authorization: 'Bearer ' + jwt}})
        this.setState({
            vehicles: response.data
        });
        console.log(response.data)
    }

    render() { 
        return (
            <div>
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th scope = 'col'></th>
                            <th scope = 'col'>Vehicle</th>
                            <th scope = 'col'>Mileage</th>
                            <th scope = 'col'>License Plate</th>
                            <th scope = 'col'>Service Reminders:</th>
                            <th scope = 'col'></th>

                        </tr>
                    </thead>
                    <tbody>
                        {this.state.vehicles.map((vehicle)=> {
                            return (
                                <tr class = "table-primary" key = {vehicle.id}>
                                    <td><Image style={{ width:100 }} cloudName="dj6u5jy2g" publicId = {`https://res.cloudinary.com/dj6u5jy2g/image/upload/v1633894555/${vehicle.image}`}/></td>
                                    <td><h4>{vehicle.year} {vehicle.make} {vehicle.model}</h4></td>
                                    <td><h4>{vehicle.mileage}</h4></td>
                                    <td><h4>{vehicle.license_plate}</h4></td>
                                    <td><GarageServiceReminder vehicleID = {vehicle.id} vehicleMileage = {vehicle.mileage} /></td>
                                    <td><span class = "badge rounded-pill bg-secondary"><Link to = {{pathname: '/vehicle_details', state: {vehicles: [vehicle]}}}><h6>Vehicle Details Page</h6> </Link></span></td>
                                </tr>

                            );
                        })}
                    </tbody>
                </table>
                
                <Link to = {{pathname: '/add_vehicle'}}><h4>Add a Vehicle </h4></Link>
                <div>
                    <TechTips />
                </div>
            </div>
        );
    }
}
 
export default Garage;