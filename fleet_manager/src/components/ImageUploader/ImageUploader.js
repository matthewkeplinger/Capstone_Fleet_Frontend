import React , { useState }from 'react';
import axios from 'axios';
import {Image} from 'cloudinary-react';

function ImageUploader() {
    const [imageSelected, setImageSelected] = useState("");

    const uploadImage = () => {
        const formData = new FormData();
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
            <button type="button" class = "btn btn-link" onClick={uploadImage}>Upload Image</button>

            {/* Could move this to vehicle Details; use URL as constant; add ID to DB;   */}
            {/* const imgURL = "" */}
            <Image style={{ width:560 }} cloudName="dj6u5jy2g" publicId = "https://res.cloudinary.com/dj6u5jy2g/image/upload/v1633893960/abqavjsh6nhwliqshybs.jpg"/>
        </div>
    )
}
export default ImageUploader;