import React from 'react';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home.js';
import About from './pages/About/About.js';
import SlidingText from './components/SlidingText.js';
// import Services from './Services';
import NavBar from './components/Nav.js';

function App() {
    return (
        <ChakraProvider>
            <Router>
                <SlidingText text={"Socialgage Media" + '\u00A0'.repeat(15) + "~" + '\u00A0'.repeat(15)} />
                <NavBar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    {/* <Route path="/services" element={<Services />} /> */}
                </Routes>
            </Router>
        </ChakraProvider>
    );
}

export default App;
