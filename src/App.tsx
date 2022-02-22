import './styles/App.css';
import Header from './ui/Header';
import * as React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import YourRecipe from './pages/YourRecipe';
import Recipes from './pages/Recipes';
import About from './pages/About';
import Admin from './pages/Admin';
import { Nav } from './ui/Nav';

function App() {
  return (
    <Router basename="/oslo-kokebook/">
      <Header />
      <Nav />
      <Routes>
        <Route exact path="/" element={<Navigate replace to="/your-recipe" />} />
        <Route exact path="/recipes" element={<Recipes />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/admin" element={<Admin />} />
        <Route exact path="/your-recipe" element={<YourRecipe />} />
      </Routes>
    </Router>
  );
}

export default App;
