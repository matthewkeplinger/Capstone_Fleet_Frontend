import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

//Pull Vehicle info from garage to populate Vehicle Data
function VehicleDetails(props) {
    const [vehicles, setVehicle] = useState([''])


    return (
        <div class="card text-white bg-primary mb-3">
            <div class = "card-header">
                <div class = "card-body">
                    {props.location.state.vehicles.map((element) =>
                    <>
                    <h4>Vehicle: {element.year} {element.make} {element.model}</h4>
                    <h4>VIN: {element.VIN}</h4>
                    <h4>Mileage: {element.mileage}</h4>
                    <h3>Services Required: </h3>
                    <h3>Services Performed:</h3>
                    <Link to = {{pathname: '/garage'}}> Back to Garage </Link>
                    </>)}
                </div>
            </div>
        </div>

    )
}
export default VehicleDetails;