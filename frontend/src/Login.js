import React, { Component } from "react";
import './Styles.css'

function Login (){
  
 
    return (
      
      <div className="container">
	
	<div className="card">
		
		<form className="card-form">
			
						<div className="input">
				<input type="email" className="input-field" placeholder="email"  required/>
				
			</div>
						<div className="input">
				<input type="password" className="input-field" placeholder="password" required/>
				
			</div>
			<div className="action">
				<button className="action-button">Sign In</button>
			</div>
		</form>
		<div className="card-info">
			<p>Not Registered? <a href="/sign-up">Sign Up</a></p>
		</div>
	</div>
</div>
    




    );
  }

  export default Login