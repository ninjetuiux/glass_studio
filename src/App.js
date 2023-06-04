import React from 'react';
import './index.css'; // Importing the index.css file
import './App.scss'; // Importing the App.scss file
import Home from './pages/Home';
import WhoWeAre from './pages/WhoWeAre';
import OurServices from './pages/OurServices';
import Portfolio from './pages/Portfolio';
import Testimonials from './pages/Testimonials';
import ContactUs from './pages/ContactUs';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Layout from './components/layout-theme/Layout';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <ThemeProvider> {/* Wrap the app with the ThemeProvider */}
      <div className="App"> {/* Root div with the 'App' class */}
        <Router> {/* Set up the router */}
          <Layout> {/* Use the Layout component as a common wrapper */}
          <Navbar />
            <Routes> {/* Define the routes */}
              <Route path="/" element={<Home />} /> {/* Route for the Home page */}
              <Route path="/who_we_are" element={<WhoWeAre />} /> {/* Route for the WhoWeAre page */}
              <Route path="/our_services" element={<OurServices />} /> {/* Route for the OurServices page */}
              <Route path="/portfolio" element={<Portfolio />} /> {/* Route for the Portfolio page */}
              <Route path="/testimonials" element={<Testimonials />} /> {/* Route for the Testimonials page */}
              <Route path="/contact_us" element={<ContactUs />} /> {/* Route for the ContactUs page */}
              {/* ... etc. */}
            </Routes>
          </Layout>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
