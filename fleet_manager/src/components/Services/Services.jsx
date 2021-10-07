import React, { Component } from 'react';
import axios from 'axios';

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
                <table>
                    <thead>
                        <tr>
                            <th>Service Type:</th>
                            <th>Cost:</th>
                            <th>Rec. Svc. Interval:</th>
                            <th>Part Used:</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.services.map((service)=> {
                            return (
                                <tr key = {service.id}>
                                    <td>{service.service_type}</td>
                                    <td>{service.service_cost}</td>
                                    <td>{service.mileage_interval}</td>
                                    <td>{service.part_used}</td> 
                                </tr>    
                            );
                        })}
                    </tbody>
                </table>    
            </div>
        );
    }
}
 
export default Services;