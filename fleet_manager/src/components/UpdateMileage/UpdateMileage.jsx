import axios from 'axios';
import React,{ Component} from 'react';

class UpdateMileage extends Component {
    state = { 
      mileage :'',
      

     }

  handleChange=(event) =>{
    this.setState ({
      [event.target.name]: event.target.value,
    });
  };

  //mileage in DB
  handleSubmit=(event) =>{
    let updatedMileage ={
      'mileage' : this.state.mileage
    }  
    // Post user to DB via function, axios call
      this.updateMileage(updatedMileage)
  };

  async updateMileage(newMileage){
    let vehicleID = this.props.vehicleID
    await axios.post(`http://127.0.0.1:8000/api/vehicles/mileage/${vehicleID}`, newMileage)
  }


  render() { 
    return ( 
                  <form className="form" onSubmit={this.handleSubmit}>
                  <input name="mileage" onChange={this.handleChange} value={this.state.mileage}/>
                  <button placeholder ="Under Construction" type = "submit">Update Mileage</button>
                  </form>
     );
  }
}
 
 export default UpdateMileage;