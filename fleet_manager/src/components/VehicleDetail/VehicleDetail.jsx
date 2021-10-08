import React from 'react';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';


function VehicleDetails(props) {
    const [vehicles, setVehicle] = useState([''])


    return (
        <div>
            <div>
                <div>
                    {props.location.state.vehicles.map((element) =>
                    <>
                    <h3>Vehicle: {element.year} {element.make} {element.model}</h3>
                    <h4>VIN: {element.VIN}</h4>
                    <h4>Mileage: {element.mileage}</h4>
                    <Link to = {{pathname: '/garage'}}> Back to Garage </Link>

                    </>)}
                </div>
            </div>
        </div>
    )
}
export default VehicleDetails;