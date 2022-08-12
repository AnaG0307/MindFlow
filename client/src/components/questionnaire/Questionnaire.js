import "../../App.css";
import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import axios from "axios";
import Logo2 from "../../assets/logo2.png";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";

export default function Questionnaire() {
  const [mood, setMood] = useState([]);
  const [error, setError] = useState("");

  const auth = getAuth();

  const handleChange = (e) => {
    setMood(e.target.mood);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const req = await axios.post("http://localhost:4000/api/period", {
        mood: mood,
      });
      const message = req.data.success;
      return {
        replace: true,
        state: {
          message,
        },
      };
    } catch (err) {
      const errMessage = err.response.data.error;
      return setError(errMessage);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label className="selectmoodtext" for="cycle">
          Select your mood for today :{" "}
        </label>
        <select value={mood} onChange={handleChange} className="moodselect">
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

        <div>
          <button type="submit" className="btn">
            Submit
          </button>
        </div>
      </form>
      <Routes>
        <Route path="/questionnaire" element={<Questionnaire />} />
      </Routes>
    </div>
  );
}

// function Questionnaire() {
//   return (
//     <div>
//       <Sidebar />
//       <h1> This is a questionnaire </h1>
//       <Routes>
//         <Route path="/questionnaire" element={<Questionnaire />} />
//       </Routes>
//     </div>
//   );
// }
// export default Questionnaire;
