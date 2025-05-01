// import React from 'react'

// import { assets } from '../../../assets/assets'
// const Card = () => {
//   return (
//     <div className="cards">
//     <div className="card">
//         <p>Suggest beautiful places to see on an upcoming trip</p>
//         <img src={assets.compass_icon} alt="" />
//     </div>
//     <div className="card">
//         <p>Briefly summarize this concept: urban planning</p>
//         <img src={assets.bulb_icon} alt="" />
//     </div>
//     <div className="card">
//         <p>Brainstorm team bonding activities for our work retreat</p>
//         <img src={assets.message_icon} alt="" />
//     </div>
//     <div className="card">
//         <p>Improve the readability of the following code</p>
//         <img src={assets.code_icon} alt="" />
//     </div>
// </div>
//   )
// }

// export default Card

import React from "react";
import { Link } from "react-router-dom";
import { assets } from "../../../assets/assets";

const Card = () => {
  return (
    <div className="cards">
      <Link to="/explore-places" className="card">
        <p>Suggest beautiful places to see on an upcoming trip</p>
        <img src={assets.compass_icon} alt="" />
      </Link>

      <Link to="/urban-planning" className="card">
        <p>Briefly summarize this concept: urban planning</p>
        <img src={assets.bulb_icon} alt="" />
      </Link>

      <Link to="/team-activities" className="card">
        <p>Brainstorm team bonding activities for our work retreat</p>
        <img src={assets.message_icon} alt="" />
      </Link>

      <Link to="/code-readability" className="card">
        <p>Improve the readability of the following code</p>
        <img src={assets.code_icon} alt="" />
      </Link>
    </div>
  );
};

export default Card;
