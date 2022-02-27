import './styles/App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import YourRecipe from './pages/YourRecipe';
import Recipe from './pages/Recipe';
import Recipes from './pages/Recipes';
import About from './pages/About';
import Admin from './pages/Admin';

function App() {
  return (
    <Router basename="/oslo-kokebook/">
      <Routes>
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/recipe/:id" element={<Recipe />} />
        <Route path="/about" element={<About />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/your-recipe" element={<YourRecipe />} />
        <Route path="" element={<Navigate replace to="/your-recipe" />} />
      </Routes>
    </Router>
  );
}

export default App;
