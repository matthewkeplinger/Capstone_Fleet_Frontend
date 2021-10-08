import React, { Component } from 'react';
import axios from 'axios';


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
                            <th>Make</th>
                            <th>Model</th>
                            <th>Year</th>
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
                                    <td>{vehicle.make}</td>
                                    <td>{vehicle.model}</td>
                                    <td>{vehicle.year}</td>
                                    <td>{vehicle.color}</td>
                                    <td>{vehicle.mileage}</td>
                                    <td>{vehicle.license_plate}</td>
                                    <td>{vehicle.VIN}</td>
                                    <td>{vehicle.maintenance_cost}</td>
                                </tr>    
                            );
                        })}
                    </tbody>
                </table>
            </div>
        );
    }
}
 
export default Garage;