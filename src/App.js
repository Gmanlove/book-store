import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './routes/Home';
import Categories from './routes/Categories';
import './App.css';

const App = () => (
  <Router>
    <div className="love">
      <Header />
    </div>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Categories" element={<Categories />} />
    </Routes>
  </Router>
);

export default App;
