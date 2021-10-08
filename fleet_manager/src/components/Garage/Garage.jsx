import React, { Component } from 'react';
import axios from 'axios';
import AddVehicle from '../AddVehicle/AddVehicle';
import { Link } from 'react-router-dom';


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
                <table>
                    <thead>
                        <tr>
                            <th>Vehicle</th>
                            <th>Color</th>
                            <th>Mileage</th>
                            <th>License Plate</th>
                            <th>VIN</th>
                            <th>Maintenance Cost to date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.vehicles.map((vehicle)=> {
                            return (
                                <tr key = {vehicle.id}>
                                    <td>{vehicle.year} {vehicle.make} {vehicle.model}</td>
                                    <td>{vehicle.color}</td>
                                    <td>{vehicle.mileage}</td>
                                    <td>{vehicle.license_plate}</td>
                                    <td>{vehicle.VIN}</td>
                                    <td>{vehicle.maintenance_cost}</td>
                                    <td><Link to = {{pathname: '/vehicle_details', state: {vehicles: [vehicle]}}}>Vehicle Details Page </Link></td>
                                </tr>

                            );
                        })}
                    </tbody>
                </table>
                <Link to = {{pathname: '/add_vehicle'}}> Add a Vehicle </Link>
            </div>
        );
    }
}
 
export default Garage;