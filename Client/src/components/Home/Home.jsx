import React, { useContext } from "react";
import "./home.css";
import { assets } from "../../assets/assets";
import { Context } from "../../context/Context";
// import Card from "./Cards/Card";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../sidebar/Sidebar";

const Home = () => {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input,
    isLoggedIn,
    
  } = useContext(Context);



  return (

    
    <>
    <Sidebar/>
    <Navbar/>
    {/* <Sidebar /> */}
    <div className="home">
      
      {/* <Navbar/> */}

      <div className="home-container">
        {!showResult ? (
          <>
            <div className="greet">
              <p>
                <span>Hello </span>
              </p>
              <p><span2>How can I help you today?</span2></p>
            </div>
{/* <Card/>  */}
          </>
        ) : (
          <div className="result">
            <div className="result-title">
              <img src={assets.user_icon} alt="" />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img src={assets.gemini_icon} alt="" />
              {loading ? (
                <div className="loader">
                  <hr />
                  <hr />
                  <hr />
                </div>
              ) : (
                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
              )}
            </div>
          </div>
        )}

        <div className="home-bottom">
          <div className="search-box">
            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              type="text"
              placeholder="Ask Anything"
            />
            <div>
            
              {input ? (
                <img className="send-icon"
                onClick={() => {
                  if (!isLoggedIn) {
                    alert("Please SignUp or Login before starting.");
                   
                  } else {
                    onSent();
                  }
                }}
                src={assets.send_icon}
                alt=""
              />
                
              ) : null}
            </div>
          </div>
          
        </div>
      </div>
    </div>
    </>
  );
};

export default Home;




{/* <img onClick={() => onSent()} src={assets.send_icon} alt="" /> */}

