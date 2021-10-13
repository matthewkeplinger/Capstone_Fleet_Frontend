import React from 'react';
import './TechTips.css'
import { Image } from 'cloudinary-react';

function TechTips (){
    return(
        <div class = "wrapperTechTips">
            <div class="card text-white bg-primary mb-3" style= {{maxWidth: 530}}>
                <div class="card-header"><h4 class = "card-title"><center>Common Fail-Points on Modern Vehicles</center></h4></div>
                    <div class="card-body">
                        <Image style={{ width:500 }} cloudName="dj6u5jy2g" publicId = {`https://res.cloudinary.com/dj6u5jy2g/image/upload/v1634143101/nv0mtpwy3zlvmkrsu3u7.png`}/>
                </div>
            </div>
        </div>
    );
}
 
export default TechTips;