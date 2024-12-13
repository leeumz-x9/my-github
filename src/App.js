import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Cart from './pages/Cart';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (item) => {
    setCartItems([...cartItems, item]);
    alert(`${item.name} added to cart!`);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'menu':
        return <Menu onAddToCart={handleAddToCart} />;
      case 'cart':
        return <Cart cartItems={cartItems} />;
      default:
        return <Home />;
    }
  };

  return (
    <div>
      <Navbar onNavigate={setCurrentPage} />
      {renderPage()}
      <Footer />
    </div>
  );
};

export default App;
