import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar";
import Help from "./components/Home/Help/Help";
import Settings from "./components/sidebar/Settings/Settings";
import Main from "./components/Welcome/Welcome";
// import Navbar from "./components/Navbar/Navbar";
import Faqs from "./components/Home/Help/Faqs/Faqs";
import UsingApp from "./components/Home/Help/UsingApp/UsingApp";
import Support from "./components/Home/Help/Support/Support";
import ExplorePlaces from "./components/Welcome/Cards/CardPages/ExplorePlaces";
import UrbanPlanning from "./components/Welcome/Cards/CardPages/UrbanPlanning";
import TeamActivities from "./components/Welcome/Cards/CardPages/TeamActivities";
import CodeReadability from "./components/Welcome/Cards/CardPages/CodeReadability";
import Login from "./components/Home/Login";
// import Signup from "./components/Signup";
// import Register from "./components/register";
// import Login from "./components/login";
// import { Link } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import Welcome from "./components/Welcome/Welcome";
import Home from "./components/Home/Home";
// import Result from "./components/Home/Result";

function App() {

  return (

    <Router>



      {/* <Sidebar /> */}
      {/* <Navbar /> */}
      {/* <nav>
        <Link to="/signup">Signup</Link> | <Link to="/login" >Login</Link>
      </nav> */}
      <ToastContainer />
      <Routes>




        {/* <Route path="/signup" element={<Signup />} /> */}
        <Route path="/login" element={<Login />} />



        {/* <Route path="/Welcome" element={<Welcome />} /> */}
        <Route path="Home" element={<Home />} />
        <Route path="/" element={<Main />} />

        <Route path="/help" element={<Help />} />
        <Route path="/help/Faqs" element={<Faqs />} />
        <Route path="/help/UsingApp" element={<UsingApp />} />
        <Route path="/help/Support" element={<Support />} />

        {/* <Route path="/CardsAns/Card1" element={<Card1 />} /> */}
        <Route path="/explore-places" element={< ExplorePlaces />} />
        <Route path="/urban-planning" element={<  UrbanPlanning />} />
        <Route path="/team-activities" element={<TeamActivities />} />
        <Route path="/code-readability" element={<CodeReadability />} />

        {/* <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} /> */}

        <Route path="/settings" element={<Settings />} />



        {/* <Route path="/home/result" element={<Result />} /> */}
      </Routes>

    </Router>


  );
}

export default App;




