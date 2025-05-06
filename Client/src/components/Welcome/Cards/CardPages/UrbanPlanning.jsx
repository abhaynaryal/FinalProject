import { Link } from "react-router-dom";
import "../Card.css";

const UrbanPlanning = () => (
    <div className="card-page">
      <h2>🏙️ Urban Planning Summary</h2>
      <p>
        Urban planning is the process of designing and organizing city layouts to make them functional,
        sustainable, and pleasant to live in. It considers transportation, housing, green spaces,
        and public services to improve quality of life for residents.
      </p>
      <Link to="/">← Back</Link>
    </div>
  );
  export default UrbanPlanning