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
                    <h3>Make: {element.make}</h3>
                    <h3>Model:{element.model}</h3>
                    <h3>Year: {element.year}</h3>
                    <Link to = {{pathname: '/garage'}}> Back to Garage </Link>

                    </>)}
                </div>
            </div>
        </div>
    )
}
export default VehicleDetails;