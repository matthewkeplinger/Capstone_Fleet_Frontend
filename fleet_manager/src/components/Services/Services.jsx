import React, { Component } from 'react';
import axios from 'axios';
import AddService from './AddService';

class Services extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            services: []
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
        console.log(response.data)
    }

    render() { 
        return (
            
            <div>
                <table class = "table table-hover">
                    <thead>
                        <tr>
                            <th scope = 'col'>Service Type:</th>
                            <th scope = 'col'>Cost:</th>
                            <th scope = 'col'>Service Interval:</th>
                            <th scope = 'col'>Part Used:</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.services.map((service)=> {
                            return (
                                <tr class = "table-primary" key = {service.id}>
                                    <td>{service.service_type}</td>
                                    <td>{service.service_cost}</td>
                                    <td>{service.mileage_interval}</td>
                                    <td>{service.part_used}</td> 
                                </tr>    
                            );
                        })}
                    </tbody>
                </table>
                <AddService/>
            </div>
        );
    }
}
 
export default Services;