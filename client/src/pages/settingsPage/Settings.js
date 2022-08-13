import React from "react";
import "../../App.css";
import '../../style/Header.css'
import '../../style/index.css'
import '../../style/Settings.css'
import Sidebar from '../../components/sidebar/Sidebar2';

function Settings() {
  
    return (
      <div>
      <Sidebar /> 
      <div className='App'>
      <div>
      <h1 className='titlesett'>Settings</h1>
      <div>
      <label className="l1">
      Consent to marketing
      </label>
      <button className="radiobtn"></button>
      </div>

      <div>
      <label className="l2">
      Subscribe to newsletter
      </label>
      <button className="radiobtn"></button>
      </div>

      <div>
      <label className="l3">
      Ovulation notification
      </label>
      <button class="radiobtn"></button>
      </div>

      <div className="l4">
      <label>
      Period start notification
      </label>
      <button className="radiobtn"></button>
      </div>

      <div>
      <label className="l5">
      Location services
      </label>
      <button className="radiobtn"></button>
      </div>
      </div>   
      </div> 
      </div> 
    );
  }
  
  export default Settings;
  
  
  
  
