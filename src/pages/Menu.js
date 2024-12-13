import React from 'react';
import MenuItem from '../components/MenuItem';

const Menu = ({ onAddToCart }) => {
  const menuItems = [
    {
      name: 'Burger',
      description: 'Delicious beef burger with cheese and lettuce.',
      price: 5.99,
      image: 'https://via.placeholder.com/100', // ตัวอย่างภาพ
    },
    {
      name: 'Pizza',
      description: 'Tasty pizza with pepperoni and extra cheese.',
      price: 8.99,
      image: 'https://via.placeholder.com/100', // ตัวอย่างภาพ
    },
    {
      name: 'Pasta',
      description: 'Creamy pasta with Alfredo sauce.',
      price: 7.49,
      image: 'https://via.placeholder.com/100', // ตัวอย่างภาพ
    },
    {
      name: 'Salad',
      description: 'Fresh vegetable salad with olive oil dressing.',
      price: 4.49,
      image: 'https://via.placeholder.com/100', // ตัวอย่างภาพ
    },
    {
      name: 'Sushi',
      description: 'Fresh sushi with salmon and avocado.',
      price: 9.99,
      image: 'https://via.placeholder.com/100', // ตัวอย่างภาพ
    },
  ];

  return (
    <div style={styles.menuContainer}>
      <h2 style={styles.menuTitle}>Our Menu</h2>
      <div style={styles.menuList}>
        {menuItems.map((item, index) => (
          <MenuItem key={index} item={item} onAddToCart={onAddToCart} />
        ))}
      </div>
    </div>
  );
};

const styles = {
  menuContainer: {
    padding: '20px',
    backgroundColor: '#f8f9fa',
  },
  menuTitle: {
    fontSize: '30px',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: '20px',
  },
  menuList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
};

export default Menu;
