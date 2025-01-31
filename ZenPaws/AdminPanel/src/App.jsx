import 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Header from './Header'; 
import SideBar from './SideBar'; 
import Home from './Home'; 
import Customer from './customer';
import Categories from './Categories';

function App() {
  return (
    <Router>
      <div className="grid-container">
        <Header />
        <SideBar />
        <main className="main-container">
          <Routes>
            <Route path="/Home" element={<Home />} />
            <Route path="/Customer" element={<Customer />} />
            <Route path="/Categories" element={<Categories/>}/>
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
