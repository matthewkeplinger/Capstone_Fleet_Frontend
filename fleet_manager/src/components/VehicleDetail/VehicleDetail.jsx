import React from 'react';
import { Link } from 'react-router-dom';
import ServiceRecords from '../ServiceRecords/ServiceRecords';
import AddServiceRecord from '../AddServiceRecord/AddServiceRecord';
import ImageUploader from '../ImageUploader/ImageUploader';
import { Image } from 'cloudinary-react';
import './VehicleDetail.css'

//Pull Vehicle info from garage to populate Vehicle Data
function VehicleDetails(props) {
    let vehicle_id = props.location.state.vehicles[0].id
    console.log(vehicle_id)
    return (
        <div class = "wrapperDetail">
            <div class="card text-white bg-primary mb-3" style= {{maxWidth: 650}}>
                <div class = "card-header">
                    <div class = "card-body">
                        {props.location.state.vehicles.map((element) =>
                        <>
                        <h4>{element.year} {element.make} {element.model}</h4>
                        <ImageUploader vehicleID = {vehicle_id} />
                        <Image style={{ width:560 }} cloudName="dj6u5jy2g" publicId = {`https://res.cloudinary.com/dj6u5jy2g/image/upload/v1633894555/${element.image}`}/>
                        <h4>VIN: {element.VIN}</h4>
                        <h4>Mileage: {element.mileage}</h4>
                        <h4>Color: {element.color}</h4>
                        <h3>Services Required: </h3>
                        <h3>Services Performed:</h3>
                        <ServiceRecords vehicleID = {vehicle_id} />
                        <AddServiceRecord vehicleID = {vehicle_id}/>
                        <Link to = {{pathname: '/garage'}}> Back to Garage </Link>
                        </>)}
                    </div>
                </div>
            </div>
        </div>


    )
}
export default VehicleDetails;