import React from 'react';
import { Link } from 'react-router-dom';
import ServiceRecords from '../ServiceRecords/ServiceRecords';
import AddServiceRecord from '../AddServiceRecord/AddServiceRecord';
import UpdateMileage  from '../UpdateMileage/UpdateMileage';
import ServiceReminder from '../ServiceReminder/ServiceReminder';
import ImageUploader from '../ImageUploader/ImageUploader';
import { Image } from 'cloudinary-react';
import './VehicleDetail.css'

//Pull Vehicle info from garage to populate Vehicle Data
function VehicleDetails(props) {
    return (
        <div class = "wrapperDetail">
            <div class="card text-white bg-primary mb-3" style= {{maxWidth: 650}}>
                <div class = "card-header">
                    <div class = "card-body">
                        {props.location.state.vehicles.map((element) =>
                        <>
                        <h2>{element.year} {element.make} {element.model}</h2>
                        <ImageUploader vehicleID = {element.id} vehicleImage = {element.image} />
                        <Image style={{ width:560 }} cloudName="dj6u5jy2g" publicId = {`https://res.cloudinary.com/dj6u5jy2g/image/upload/v1633894555/${element.image}`}/>
                        <h4>VIN: {element.VIN}</h4>
                        <h4>Mileage: {element.mileage}</h4> <UpdateMileage vehicleID = {element.id}/>
                        <h4>Color: {element.color}</h4>
                        <ServiceRecords vehicleID = {element.id} />
                        <ServiceReminder vehicleID = {element.id} vehicleMileage = {element.mileage} />
                        <AddServiceRecord vehicleID = {element.id}/>
                        <br />
                        <Link to = {{pathname: '/garage'}}> Back to Garage </Link>
                        </>)}
                    </div>
                </div>
            </div>
        </div>


    )
}
export default VehicleDetails;