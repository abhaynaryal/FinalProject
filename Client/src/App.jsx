import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Help from "./components/home/Help/Help/Help";
import Main from "./components/Welcome/Welcome";

import Faqs from "./components/home/Help/faqs/faqs";
import UsingApp from "./components/home/Help/usingapp/usingapp";
import Support from "./components/home/Help/support/support";

import Login from "./components/home/Login";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from "./components/Home/Home";


function App() {

  return (

    <Router>
      <ToastContainer />
      <Routes>

        <Route path="/" element={<Main />} />

        <Route path="/login" element={<Login />} />

        <Route path="Home" element={<Home />} />
        <Route path="/home/help" element={<Help />} />
        <Route path="/home/help/faqs" element={<Faqs />} />
        <Route path="/home/help/usingapp" element={<UsingApp />} />
        <Route path="/home/help/support" element={<Support />} />

      </Routes>

    </Router>


  );
}

export default App;




