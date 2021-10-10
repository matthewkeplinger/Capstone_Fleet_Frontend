import React , { useState }from 'react';
import axios from 'axios';
import {Image} from 'cloudinary-react';

function ImageUploader() {
    const [imageSelected, setImageSelected] = useState("");

    const uploadImage = (files) => {
        const formData = new formData();
        formData.append("file", imageSelected);
        formData.append("upload_preset", "qoc0z1eq")

        axios.post(
            "https://api.cloudinary.com/v1_1/dj6u5jy2g/image/upload", formData).then((response) => {
                console.log(response);
        });
    };
    return (
        <div>
            <input type = "file" onChange = {(event) =>{
                setImageSelected(event.target.files[0]);
            }}
            />
            <button onClick={uploadImage}>Upload Image</button>

            {/* Could move this to vehicle Details; use URL as constant; add ID to DB;   */}
            {/* const imgURL = "" */}
            <Image cloudName="dj6u5jy2g" publicId = ""/>
        </div>
    )
}
export default ImageUploader;