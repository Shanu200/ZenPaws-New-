import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import AboutUs from "./Pages/About-Us/AboutUs";
import Navbar from "./Components/Navbar/Navbar";
import SignForm from "./Pages/SignForm/SignForm";
import Categories from "./Pages/Categories/Categories";
import { Profile } from "./Pages/Profile/Profile";
import { Contact } from "./Pages/Contact-Us/Contact";
import { ItemDetails } from "./Pages/Items/ItemDetails";

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
          <Route path="/contact" element={<Contact />} />
          <Route path="/item" element={<ItemDetails/>}/>

        </Routes>
      </Router>
    </>
  );
}

export default App;
