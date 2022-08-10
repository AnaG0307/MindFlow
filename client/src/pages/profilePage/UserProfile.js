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



export default function UserProfile() {
//   const [loadingUser, setLoadingUser] = useState(true);
//   const [user, setUser] = useState(null);
   const auth = getAuth();
//   let navigate = useNavigate()

//   const getUser = async () => {
//     try {
//       const token = await firebaseService.auth.currentUser.getIdToken(true);
//       console.log(token);
//       const req = await axios.get("http://localhost:4000", {
//         headers: {
//           authorization: `Bearer ${token}`
//         }
//       });

//       console.log(req.data);

//       if (req.data) {
//         setUser(req.data);
//         setLoadingUser(false);
//       }
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   useEffect(() => {
//     getUser();
//   }, []);

  return (
    <>
       {/* <h1>Dashboard</h1>
      {loadingUser ? (
        <p>Loading User</p>
      ) : ( */}
        <div>
          <p>Name: {auth.currentUser.displayName}</p>
          <p>Surname: {auth.currentUser.surname}</p>
          <p>Email: {auth.currentUser.email}</p>
        </div>


  
      <Link
to="/"
onClick={() =>  {
  signOut(auth)
    .then(() => {
      console.log("user signed out");
    })
    .catch((error) => {
      console.log("error", error);
    });
}}
>
Log out
</Link>

    </>
  );
}