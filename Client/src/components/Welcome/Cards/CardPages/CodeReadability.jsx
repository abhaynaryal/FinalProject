import { Link } from "react-router-dom";
import "../Card.css";

const CodeReadability = () => (
    <div className="card-page">
      <h2>💡 Improve Code Readability</h2>
      <p>
        To make code more readable:
        <ul>
          <li>Use descriptive and consistent variable/function names.</li>
          <li>Keep functions small and focused.</li>
          <li>Comment complex logic only when needed.</li>
          <li>Follow consistent formatting and indentation.</li>
          <li>Use proper file structure and avoid repetition (DRY principle).</li>
        </ul>
      </p>
      <Link to="/">← Back</Link>
    </div>
  );

  export default CodeReadability