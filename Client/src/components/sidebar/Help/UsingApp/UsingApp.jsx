import React from "react";
import { Link } from "react-router-dom";
import "./UsingApp.css";

const UsingApp = () => {
  return (
    <div className="using-app-page">
      <h1 className="using-app-heading">Getting Started</h1>
      <p className="using-app-subtext">
        Here's how to begin using the app in just two steps:
      </p>

      <div className="step-card">
        <h2 className="step-title">1. Sign Up</h2>
        <p className="step-text">
          To use the app, you'll need to create an account. Click the <strong>Sign Up</strong> button on the homepage, fill in your details, and you're all set!
        </p>
      </div>

      <div className="step-card">
        <h2 className="step-title">2. Log In</h2>
        <p className="step-text">
          Already have an account? Simply click <strong>Log In</strong> and enter your credentials to access the app.
        </p>
      </div>

      <div className="back-link">
        <Link to="/help" className="back-button">← Back to Help</Link>
      </div>
    </div>
  );
};

export default UsingApp;
