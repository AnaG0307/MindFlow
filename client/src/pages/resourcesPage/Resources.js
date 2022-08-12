import React from "react";
import "../../App.css";
import Sidebar from "../../components/sidebar/Sidebar2.js";
import Resources from "../../components/resources/Resources.js";
import Container from "react-bootstrap/Container";

function ResourcesPage() {
  return (
    <section className="Resources">
      <Sidebar />
      <h1> This is resources page </h1>
      <Resources />
    </section>
  );
}

export default ResourcesPage;
