import React from "react";
import { Link } from "react-router-dom";
import "./Help.css";
import Navbar from "../../Navbar/Navbar";
import Sidebar from "../../sidebar/Sidebar";



const Help = () => {
  return (
    <>
    <Navbar/>
    <Sidebar/>

    
    <div className="help-page">
      <h1 className="help-heading">Need Help?</h1>
      <p className="help-description">
        We are here to assist you! Choose a topic below to get started.
      </p>

      <div className="card-container">
        <div className="help-card">
          <h2 className="card-title">How to Use the App</h2>
          <p className="card-text">
            Learn how to navigate, create new chats, and use all features effectively.
          </p>
          <Link to="/help/UsingApp" className="card-link">
            Learn More →
          </Link>
        </div>

        <div className="help-card">
          <h2 className="card-title">FAQs</h2>
          <p className="card-text">
            Find answers to the most commonly asked questions.
          </p>
          <Link to="/help/Faqs" className="card-link">
            Learn More →
          </Link>
        </div>
      </div>

      <div className="contact-support">
        <p>
          Still need help?{" "}
          <Link to="/help/Support" className="contact-link">
            Contact Support
          </Link>
        </p>
      </div>
    </div>
    </>
    
  );
};

export default Help;



