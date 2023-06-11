import React from 'react';
import './index.css'; // Importing the index.css file
import './App.scss'; // Importing the App.scss file
import Home from './pages/Home';
import WhoWeAre from './pages/WhoWeAre';
import Portfolio from './pages/Portfolio';
import Testimonials from './pages/Testimonials';
import ContactUs from './pages/ContactUs';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Layout from './components/layout-theme/Layout';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Router>
          <Navbar className="relative z-100" /> {/* Move Navbar outside Layout */}
          <Layout>
            <div className=""> {/* Remove Navbar from Layout */}
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/who_we_are" element={<WhoWeAre />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/testimonials" element={<Testimonials />} />
                <Route path="/contact_us" element={<ContactUs />} />
              </Routes>
            </div>
          </Layout>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
