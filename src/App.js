import React from 'react';
import './index.css';
import './App.css';
import Home from './pages/Home';
import WhoWeAre from './pages/WhoWeAre';
import OurServices from './pages/OurServices';
import Portfolio from './pages/Portfolio';
import Testimonials from './pages/Testimonials';
import ContactUs from './pages/ContactUs';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';


function App() {
  return (
      <ThemeProvider>
    <div className="App">
            <Router>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/who_we_are" element={<WhoWeAre />} />
                <Route path="/our_services" element={<OurServices />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/testimonials" element={<Testimonials />} />
                <Route path="/contact_us" element={<ContactUs />} />
                {/* ... etc. */}
              </Routes>
            </Router>
    </div>
      </ThemeProvider>
  );
}

export default App;
