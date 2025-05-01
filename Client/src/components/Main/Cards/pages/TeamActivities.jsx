import { Link } from "react-router-dom";
import "../Card.css";


const TeamActivities = () => (
    <div className="card-page">
      <h2>🤝 Team Bonding Activities</h2>
      <p>
        Here are some great activities for team bonding:
        <ul>
          <li>Escape Rooms</li>
          <li>Outdoor Picnics or Retreats</li>
          <li>Team-building Workshops</li>
          <li>Game Nights or Trivia Challenges</li>
          <li>Group Volunteer Events</li>
        </ul>
      </p>
      <Link to="/">← Back</Link>
    </div>
  );

  export default TeamActivities
  