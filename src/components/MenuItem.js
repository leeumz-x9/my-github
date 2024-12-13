import React from 'react';

const MenuItem = ({ item, onAddToCart }) => {
  return (
    <div style={styles.menuItemContainer}>
      <img src={item.image} alt={item.name} style={styles.itemImage} />
      <div style={styles.itemInfo}>
        <h3 style={styles.itemName}>{item.name}</h3>
        <p style={styles.itemDescription}>{item.description}</p>
        <p style={styles.itemPrice}>${item.price}</p>
        <button style={styles.addButton} onClick={() => onAddToCart(item)}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

const styles = {
  menuItemContainer: {
    display: 'flex',
    alignItems: 'center',
    borderBottom: '1px solid #ddd',
    padding: '10px',
    marginBottom: '10px',
  },
  itemImage: {
    width: '100px',
    height: '100px',
    objectFit: 'cover',
    borderRadius: '4px',
    marginRight: '20px',
  },
  itemInfo: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  itemName: {
    fontSize: '18px',
    fontWeight: 'bold',
  },
  itemDescription: {
    fontSize: '14px',
    color: '#555',
  },
  itemPrice: {
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#28a745',
  },
  addButton: {
    padding: '8px 16px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    marginTop: '10px',
  },
};

export default MenuItem;
