import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <div style={styles.leftSection}>
        <GiHamburgerMenu style={styles.icon} />
        <span style={styles.brandName}>FoodWagon</span>
      </div>
      <div style={styles.centerSection}>
        <p style={styles.deliveryInfo}>Deliver to: Current Location Mohammadpur Bus Stand, Dhaka</p>
      </div>
      <div style={styles.rightSection}>
        <button style={styles.searchButton}>Search Food</button>
        <button style={styles.loginButton}>Login</button>
      </div>
    </nav>
  );
};

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: '#fff', // Navbar สีขาว
    color: '#333',
  },
  leftSection: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  icon: {
    fontSize: '30px',
    color: '#333',
  },
  brandName: {
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#333',
  },
  centerSection: {
    flex: 1,
    textAlign: 'center',
  },
  deliveryInfo: {
    margin: 0,
    fontSize: '14px',
  },
  rightSection: {
    display: 'flex',
    gap: '10px',
  },
  searchButton: {
    padding: '5px 10px',
    backgroundColor: '#555',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  loginButton: {
    padding: '5px 10px',
    backgroundColor: '#007BFF',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

export default Navbar;
