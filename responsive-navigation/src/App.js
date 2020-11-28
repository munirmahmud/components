import { Router } from '@reach/router';
import React from 'react';
import ResponsiveNavigation from './components/ResponsiveNavigation';
import logo from './logo.svg';
import { navLinks } from './navLinks';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';

const App = () => {
    return (
        <div>
            <ResponsiveNavigation 
                navLinks={navLinks} 
                logo={logo}
                background='#fff'
                hoverBackground='#ddd'
                linkColor="#777"
             />
            <Router>
                <Home path="/" />
                <Contact path="/contact" />
                <Portfolio path="/portfolio" />
            </Router>
        </div>
    )
}
 
export default App;
