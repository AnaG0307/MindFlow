import React from "react";
import "../../App.css";
import Questionnaire from "../../components/questionnaire/Questionnaire";
import "../../style/Questionnaire.css";
import Question from "../../assets/Question.png"
import Sidebar from "../../components/sidebar/Sidebar2.js";


function questionnairePage() {
  return (
    <div className="QuestionnairePage">
    <Sidebar />
    <div>
    <h1 className="pagetitle"> How are you feeling today? </h1>
    <img
    src={Question} 
    alt= "Questionpng" 
    className="Questionpng"
    width="190" 
    height="240"
    /> 
    </div>
    <div className="Questionfunction">
    <Questionnaire />
    </div>
    </div>
  );
}

export default questionnairePage;
