import React, { useContext } from "react";
import "./Welcome.css";
import { Link } from "react-router-dom";

const Main = () => {


  return (




    <div className="main">

      <div className="greet">
        <p>
          <p>Meet<span>Gemini</span></p>
        </p>
        <p>your personal AI assistant</p>
        <Link to="/Home">
            <button className="get-started-btn">Get Started</button>
          </Link>
      </div>

    </div>


  );
};

export default Main;
