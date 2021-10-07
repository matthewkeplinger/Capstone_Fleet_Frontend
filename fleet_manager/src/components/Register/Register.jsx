import axios from 'axios';
import React,{ Component} from 'react';

class Register extends Component {
    state = { 
      firstName:'',
      lastName:'',
      userName:'',
      password:'',
      userEmail:''
     }

  handleChange=(event) =>{
    this.setState ({
      [event.target.name]: event.target.value,
    });
  };

  //create user in DB
  handleSubmit=(event) =>{
    let aUser ={
      'first_name' : this.state.firstName,
      'last_name': this.state.lastName,
      'username': this.state.userName,
      'password': this.state.password,
      'email': this.state.userEmail
    }  
    // Post user to DB via function, axios call
      this.addNewUser(aUser)
  };

  async addNewUser(newUser){
    await axios.post(`http://127.0.0.1:8000/api/auth/register/`, newUser).then(response => {alert("Registration complete! You may now login.")})
  }


  render() { 
    return ( 
    <ul>
      <form className="form" onSubmit={this.handleSubmit}>
      <li><label>First Name</label></li>
      <input name="firstName" onChange={this.handleChange} value={this.state.firstName}/>
      <li><label>Last Name</label></li>
      <input name="lastName" onChange={this.handleChange} value={this.state.lastName}/>
      <li><label>Username</label></li>
      <input name="userName" onChange={this.handleChange} value={this.state.userName}/>
      <li><label>Password</label></li>
      <input name="password" onChange={this.handleChange} value={this.state.password}/>
      <li><label>Email</label></li>
      <input name="userEmail" onChange={this.handleChange} value={this.state.userEmail}/>

      <button type = "submit">Create account</button>
      </form>
      </ul>
     );
  }
}
 
 export default Register