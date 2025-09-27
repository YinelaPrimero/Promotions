import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            {/* Placeholder routes for future category pages */}
            <Route path="/category/:categoryId" element={<div className="min-h-screen flex items-center justify-center"><h1 className="text-2xl font-bold text-gray-700">Página de Categoría - Próximamente</h1></div>} />
            <Route path="/category/:categoryId/:subcategory" element={<div className="min-h-screen flex items-center justify-center"><h1 className="text-2xl font-bold text-gray-700">Subcategoría - Próximamente</h1></div>} />
            <Route path="*" element={<div className="min-h-screen flex items-center justify-center"><h1 className="text-2xl font-bold text-gray-700">Página no encontrada</h1></div>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
