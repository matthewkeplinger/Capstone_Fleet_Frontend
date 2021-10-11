import React , { useState }from 'react';
import axios from 'axios';
import {Image} from 'cloudinary-react';

function ImageUploader(props) {
    const [imageSelected, setImageSelected] = useState("");
    let vehicle_id = props.vehicle.id

    const uploadImage = async () => {
        const formData = new FormData();
        formData.append("file", imageSelected);
        formData.append("upload_preset", "qoc0z1eq")


        let response = await axios.post("https://api.cloudinary.com/v1_1/dj6u5jy2g/image/upload", formData);
        console.log(response)
        // constructor the put object
        console.log(response.data.public_id)

        let payload = {
            'image' : response.data.public_id
        }
        const jwt= localStorage.getItem('token');
        let putResponse = await axios.put(`http://127.0.0.1:8000/api/vehicles/update/${vehicle_id}/`, payload, { headers: {Authorization: 'Bearer ' + jwt}})
    };
    return (
        <div>
            <input type = "file" onChange = {(event) =>{
                setImageSelected(event.target.files[0]);
            }}
            />
            <button type="button" class = "btn btn-link" onClick={uploadImage}>Upload Image</button>

            {/* Could move this to vehicle Details; use URL as constant; add ID to DB;   */}
            {/* const imgURL = "" */}
            {/* <Image style={{ width:560 }} cloudName="dj6u5jy2g" publicId = "https://res.cloudinary.com/dj6u5jy2g/image/upload/v1633894555/yyzgvnnpydlnzkjtecme.jpg"/> */}
        </div>
    )
}
export default ImageUploader;