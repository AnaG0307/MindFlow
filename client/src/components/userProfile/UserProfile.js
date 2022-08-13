import "../../style/ProfilePage.css";
import Profile1 from "../../assets/Profile1.png";
import Sidebar from "../../components/sidebar/Sidebar2";
import React from "react";
import { useGetUserQuery } from "../../redux/slice/profileSlice";

//User profile component that calls user details data from Redux store
//Currently, the function returns data only when directly accessed via log in page

export default function UserProfile() {
 
  const {
    currentData: user,
    isLoading,
    isSuccess,
    isError,
  } = useGetUserQuery();

  return (

    <div>
      <div className="header">
        <h1>Your Profile Details</h1>
      </div>
      <Sidebar /> 
          <div className="profile">
            <img src={Profile1} alt="ProfilePic" width="200" height="200" />
          </div>
          <div className="detail">
            {isLoading && <h2>...Loading</h2>}
            {isError && <h2>Something went wrong...</h2>}
            {isSuccess && (
              <div>
                <p>Name: {user.name}</p>
                <p>Surname: {user.surname}</p>
                <p>Email: {user.email}</p>
              </div>
            )}
          </div>
    </div>
  );
}
