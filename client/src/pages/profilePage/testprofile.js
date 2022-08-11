import {
    BrowserRouter as Router,
    Route,
    Routes,
    useNavigate, Link, useLocation
  } from "react-router-dom";
  //import Registration from "./Registration";
  import Dashboard from "../../pages/dashboard/MoodLog";
  import { useEffect, useState } from "react";
  import firebaseService from "../../services/firebase";
  import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
  
  
  
  import axios from "axios";
  import React, { Component }  from 'react';
  import { useGetUserQuery } from '../../redux/slice/profileSlice'
  
  
  
  export default function TestProfile() {

   
 
     const auth = getAuth();
    
     const  {
        currentData: user,
        isLoading,
        isSuccess,
        isError
        
      } = useGetUserQuery()
  
  
    return (
      <>
         {isLoading && <h2>...Loading</h2>}
         {isError && <h2>Something went wrong</h2>}
         {isSuccess && <div>

            <p>Name: {user.name}</p>
            <p>Surname: {user.surname}</p>
            <p>Email: {user.email}</p>
           
            
            
            </div>}


  
      </>
    );
  }