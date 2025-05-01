import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar";
import Help from "./components/sidebar/Help/Help";
// import Settings from "./components/sidebar/Settings/Settings";
import Main from "./components/Main/Main";
import Navbar from "./components/Navbar/Navbar";
import Faqs from "./components/sidebar/Help/Faqs/Faqs";
import UsingApp from "./components/sidebar/Help/UsingApp/UsingApp";
import Support from "./components/sidebar/Help/Support/Support";
import ExplorePlaces from "./components/Main/Cards/pages/ExplorePlaces";
import UrbanPlanning from "./components/Main/Cards/pages/UrbanPlanning";
import TeamActivities from "./components/Main/Cards/pages/TeamActivities";
import CodeReadability from "./components/Main/Cards/pages/CodeReadability";
import Login from "./components/login";
import Signup from "./components/Signup";
// import Register from "./components/register";
// import Login from "./components/login";
import { Link } from "react-router-dom";

function App() {
  return (
    <Router>
      
      <Sidebar />
      {/* <Navbar/> */}
      <nav>
        <Link to="/signup">Signup</Link> | <Link to="/login" >Login</Link>
      </nav>
      <Routes>
      



      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />




        <Route path="/" element={<Main />} />

        <Route path="/help" element={<Help />} />
        <Route path="/help/Faqs" element={<Faqs />} />
        <Route path="/help/UsingApp" element={<UsingApp />} />
        <Route path="/help/Support" element={<Support />} />

        {/* <Route path="/CardsAns/Card1" element={<Card1 />} /> */}
        <Route path="/explore-places" element={< ExplorePlaces />} />
        <Route path="/urban-planning" element={<  UrbanPlanning />} />
        <Route path="/team-activities" element={<TeamActivities />} />
        <Route path="/code-readability" element={<CodeReadability/>} />

        {/* <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} /> */}

        {/* <Route path="/settings" element={<Settings />} /> */}
      </Routes>
      
    </Router>


  );
}

export default App;

