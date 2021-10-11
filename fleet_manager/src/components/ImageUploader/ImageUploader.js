import React , { useState }from 'react';
import axios from 'axios';
import {Image} from 'cloudinary-react';

function ImageUploader() {
    const [imageSelected, setImageSelected] = useState("");

    const uploadImage = async () => {
        const formData = new FormData();
        formData.append("file", imageSelected);
        formData.append("upload_preset", "qoc0z1eq")

        let response = await axios.post("https://api.cloudinary.com/v1_1/dj6u5jy2g/image/upload", formData);
        console.log(response)
        // constructor the put object
        console.log(response.data.public_id)
        let putResponse = await axios.put('', )
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