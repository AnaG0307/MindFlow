import "../../App.css";
import React, { useState } from "react";
import { getAuth } from "firebase/auth";
import axios from "axios";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "../../style/Questionnaire.css";

//Moodlog component that sends mood imput into a database

export default function Questionnaire() {
  const [mood, setMood] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const auth = getAuth();

  const handleChange = (e) => {
    setMood(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const req = await axios.post("http://localhost:4000/api/period", {
        auth,
        mood: mood,
      });

      const message = req.data.success;
      return setSuccess(message);
    } catch (err) {
      const errMessage = err.response.data.error;
      return setError(errMessage);
    }
  };

  return (
    <div className="App">
      <div className="form">
        <form onSubmit={handleSubmit}>
          <label className="selectmoodtext" for="cycle">
            Select your mood for today :{" "}
          </label>
          <select
            value={mood}
            onChange={handleChange}
            className="moodselect"
            multiple={false}
          >
            <option className="great">Select</option>
            <option className="great" value="great">
              Great 😄
            </option>
            <option className="soso" value="medium">
              So so 😶
            </option>
            <option className="horrible" value="horrible">
              Awful 😓
            </option>
          </select>
          <div className="errorsuccess">
          {error ? <p className="errortxt">{error}</p> : <p className="successtxt">{success}</p>}
          </div>
          <div>
            <button type="submit" className="qsubmitbutton">
              Submit
            </button>
          </div>
        </form>
        <Routes>
          <Route path="/questionnaire" element={<Questionnaire />} />
        </Routes>
      </div>
    </div>
  );
}
