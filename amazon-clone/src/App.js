import './App.css';
import Navbar from './component/Navbar';
import Footer from './component/Footer/footer';
import { Routes, Route } from 'react-router-dom';
import HomeScreen from './Screen/HomeScreen/homeScreen';
import Products from './Screen/Products/products';
import Cart from './Screen/Cart/cart';
import Category from './Screen/Category/category';
import SearchResults from './Screen/Search/searchResults';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/category/:name" element={<Category />} />
        <Route path="/search" element={<SearchResults />} />
        <Route path="*" element={<HomeScreen />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
