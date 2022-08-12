import React from "react";
import "../../App.css";
import Sidebar from "../../components/sidebar/Sidebar2.js";
import Questionnaire from "../../components/questionnaire/Questionnaire";

function questionnairePage() {
  return (
    <div className="QuestionnairePage">
      <Questionnaire />
      <Sidebar />
    </div>
  );
}

export default questionnairePage;
