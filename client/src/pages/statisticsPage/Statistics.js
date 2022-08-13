import React from "react";
import "../../App.css";
import "../../style/Header.css";
import "../../style/index.css";
import "../../style/Statistics.css";
import stats1 from "../../assets/stats1.PNG";
import stats2 from "../../assets/stats2.PNG";
import stats3 from "../../assets/stats3.PNG";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Sidebar from "../../components/sidebar/Sidebar2";

function App() {
  return (
    <div>
      <div className="App">
      <Sidebar/>
          <h2 className="header">Your stats 📉</h2>
          <h5 className="header">And insight into your health</h5>
            <div className="col1">
              <h4 classname="avcycle">Average Cycle Length 📆</h4>
              <img
                src={stats1}
                alt="stats1"
                className="stats1"
                width="530"
                height="400"
              />
            </div>

            <div className="col2">
              <h4 classname="moodover">Mood Overview 😊</h4>
              <img
                src={stats2}
                alt="stats2"
                className="stats2"
                width="400"
                height="420"
                style={{ paddingRight: 0, paddingTop: 0 }}
              />
            </div>

            <div className="col3">
              <h4 classname="sympover">Symptom Overview 🌀</h4>
              <img
                src={stats3}
                alt="stats3"
                className="stats3"
                width="540"
                height="400"
                style={{ paddingRight: 0, paddingTop: 0 }}
              />
            </div>
      </div>
    </div>
  );
}

export default App;
