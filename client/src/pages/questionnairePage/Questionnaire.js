import React from "react";
import "../../App.css";
import Questionnaire from "../../components/questionnaire/Questionnaire";
import "../../style/Questionnaire.css";

function questionnairePage() {
  return (
    <div className="QuestionnairePage">
    <h1 className="pagetitle"> This is a questionnaire </h1>
      <Questionnaire />
    </div>
  );
}

export default questionnairePage;
