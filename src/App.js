import Home from './pages/Home/Home'
import Blog from './pages/Blog/Blog'
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Contact from './pages/Contact/Contact';
import { Route, Routes } from 'react-router-dom';
import Works from './pages/Works/Works'

function App() {
  return (
<div className="app">
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/works" element={<Works />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
            <Footer />
        </div>
  );
}

export default App;
