import './styles/App.css';
import Header from './ui/Header';
import * as React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import YourRecipe from './pages/home';
import Recipes from './pages/recipes';
import About from './pages/about';
import Admin from './pages/admin';
import { Nav } from './ui/Nav';

function App() {
  return (
    <Router basename="/oslo-kokebook/">
      <div>
        <Header />
        <Nav />
        <Routes>
          <Route exact path="/" element={<YourRecipe />} />
          <Route exact path="/recipes" element={<Recipes />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/admin" element={<Admin />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
