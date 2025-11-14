import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import ArticleDetail from './pages/ArticleDetail';
import CategoryPage from './pages/CategoryPage';

function App() {
  return (
    <Router basename="/blog">
      <div className="App overflow-x-hidden">
        <Header />
        <main className="overflow-x-hidden">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/article/:slug" element={<ArticleDetail />} />
            {/* Category pages */}
            <Route path="/category/:categoryId" element={<CategoryPage />} />
            <Route path="/category/:categoryId/:subcategory" element={<CategoryPage />} />
            <Route path="*" element={<div className="min-h-screen flex items-center justify-center"><h1 className="text-2xl font-bold text-gray-700">Página no encontrada</h1></div>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
