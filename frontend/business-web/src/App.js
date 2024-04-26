import React from 'react';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home.js';
import About from './pages/About/About.js';
// import Services from './Services';
import NavBar from './components/Nav.js';

function App() {
    return (
        <ChakraProvider>
            <Router>
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
