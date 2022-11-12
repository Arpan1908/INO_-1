import React from 'react'
import './Styles.css';
import { useState } from 'react';
import axios from 'axios';



function SignUp() {
  

  const[data,setData]=useState({
    full_name:'',
    email:'',
    password:''
  })

function handleChange(e){
  const newData = {...data};
  newData[e.target.id] = e.target.value;
  setData(newData);
  console.log(newData);
// setData({data, [e.target.name]: e.target.value});
 // // // // //   console.log(sendData)
};

const formSubmit = (e)=>{
  e.preventDefault();
 const sendData={
    full_name:data.full_name,
    email:data.email,
    password:data.password
  }
  axios.post('http://localhost:4000/app/sign-up',sendData)
  .then((result)=>{
    if(result.data.redirect === '/'){
      window.location('/');
    }
    else{
      window.location('/login');
    }
  })

  // window.location('/sign-in');

}
 
  return (
    <div>
      <div className="container">
	
	<div className="card">
		
		<form  className="card-form"
    onSubmit={formSubmit}>
			<div className="input">
				<input type="text" className="input-field" id="Fullname" placeholder="Fullname" 
        onChange={handleChange} value={data.full_name}
        />
				</div>
						<div className="input">
				<input type="email" className="input-field" id="email" placeholder="email" 
        onChange={handleChange} value={data.email}
       />
				</div>

      <div className="input">
				<input type="password" className="input-field"  id="password" placeholder="password" 
       onChange={handleChange} value={data.password}
        />
				</div>

			<div className="action">
				<button className="action-button">Sign Up</button>
			</div>
		</form>
		<div className="card-info">
			<p>Already Registered? <a className="sub" href="/sign-in">Sign in</a></p>
		</div>
	</div>
</div>
    </div>
  )};


export default SignUp