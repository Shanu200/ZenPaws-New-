import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import AboutUs from "./Pages/About-Us/AboutUs";
import Navbar from "./Components/Navbar/Navbar";
import SignForm from "./Pages/SignForm/SignForm";
import Categories from "./Pages/Categories/Categories";
import { Profile } from "./Pages/Profile/Profile";

function App() {
  return (
    <>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/login" element={<SignForm />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
