import React, { Component } from 'react';
import axios from 'axios';

class ImageUploader extends Component {
    state = {
        selectedFile: null
    }

    fileSelectedHandler = event => {
        this.setState({
            selectedFile: event.target.files[0]
        })
    }

    fileUploadHandler = event => {
        axios.post('');
    }
    render() { 
        return (
            <div>
                <input type="file" onChange = {this.fileSelectedHandler}/>
                <button onClick={this.fileUploadHandler}>Upload Image</button>
            </div>
            
          );
    }
}
 
export default ImageUploader;