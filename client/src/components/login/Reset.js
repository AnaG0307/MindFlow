import React, { useState } from "react";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import "../../style/SignUpPage.css";

//Reset password firebase function

export default function Reset ()  {

  const [email, setEmail] = useState("");
  const auth = getAuth();
  const navigate = useNavigate();


  const handleReset = () => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        console.log("success");

        navigate("/Login");
      })

      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("An error has occured: ", errorCode, errorMessage);
      });
  };

  return (
    <div className="App">
      <div className="form">
        <h1>Reset password</h1>
        Email:
        <br />
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div>
          <button onClick={handleReset} className="resetbtn">
            Reset password
          </button>
        </div>
      </div>
    </div>
  );
};

