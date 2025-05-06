import React from "react";
import { Link } from "react-router-dom";
import "./Support.css";
import Navbar from "../../../Navbar/Navbar";
import Sidebar from "../../../sidebar/Sidebar";
// import Sidebar from "../sidebar/Sidebar";

const Support = () => {
  return (
    <>
    <Sidebar/>
    <Navbar/>
    <div className="contact-page">
      <h1 className="contact-heading">Contact Support</h1>
      <p className="contact-subtext">
        We're here to help. If you need support, feel free to reach out using the details below.
      </p>

      <div className="contact-info">
        <h2>Email Us</h2>
        <p>
          📧 <a href="mailto:support@google.com">support@google.com</a>
        </p>

        <h2>Our Address</h2>
        <p>
          📍 Google LLC<br />
          1600 Amphitheatre Parkway<br />
          Mountain View, CA 94043<br />
          United States
        </p>
      </div>

      <div className="back-link">
        <Link to="/help" className="back-button">← Back to Help</Link>
      </div>
    </div>
    </>
  );
};

export default Support;
