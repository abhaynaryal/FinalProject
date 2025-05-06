import { Link } from "react-router-dom";
import "../Card.css";

const ExplorePlaces = () => (
    <div className="card-page">
      <h2>🌍 Beautiful Places to See</h2>
      <p>
        Here are some breathtaking destinations you can explore:
        <ul>
          <li><strong>Paris, France</strong> – For its art, fashion, and Eiffel Tower.</li>
          <li><strong>Santorini, Greece</strong> – Famous for stunning sunsets and whitewashed homes.</li>
          <li><strong>Kyoto, Japan</strong> – Rich in temples, culture, and cherry blossoms.</li>
          <li><strong>Banff National Park, Canada</strong> – Turquoise lakes and majestic mountains.</li>
        </ul>
      </p>
      <Link to="/">← Back</Link>
    </div>
  );
  
  export default ExplorePlaces