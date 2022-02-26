import './styles/App.css';
import Header from './ui/Header';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import YourRecipe from './pages/YourRecipe';
import Recipes from './pages/Recipes';
import About from './pages/About';
import Admin from './pages/Admin';

function App() {
  return (
    <Router basename="/oslo-kokebook/">
      <Header title="OSLO KOKEBOKA" />
      <Routes>
        <Route path="" element={<Navigate replace to="/your-recipe" />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/about" element={<About />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/your-recipe" element={<YourRecipe />} />
      </Routes>
    </Router>
  );
}

export default App;
