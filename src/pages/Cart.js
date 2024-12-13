import React from 'react';

const Cart = ({ cartItems, onRemoveFromCart }) => {
  const total = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div style={styles.cartContainer}>
      <h2 style={styles.cartTitle}>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p style={styles.emptyCartText}>Your cart is empty!</p>
      ) : (
        <div>
          <ul style={styles.cartItemList}>
            {cartItems.map((item, index) => (
              <li key={index} style={styles.cartItem}>
                <span>{item.name} - ${item.price}</span>
                <button
                  style={styles.removeButton}
                  onClick={() => onRemoveFromCart(item)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <div style={styles.totalContainer}>
            <p style={styles.totalText}>Total: ${total.toFixed(2)}</p>
            <button style={styles.checkoutButton}>Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
};

const styles = {
  cartContainer: {
    padding: '20px',
    backgroundColor: '#f8f9fa',
    minHeight: '100vh',
  },
  cartTitle: {
    fontSize: '30px',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: '20px',
  },
  emptyCartText: {
    fontSize: '20px',
    textAlign: 'center',
  },
  cartItemList: {
    listStyle: 'none',
    padding: 0,
  },
  cartItem: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px',
    borderBottom: '1px solid #ddd',
  },
  removeButton: {
    backgroundColor: '#dc3545',
    color: '#fff',
    border: 'none',
    padding: '5px 10px',
    cursor: 'pointer',
    borderRadius: '4px',
  },
  totalContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '20px',
  },
  totalText: {
    fontSize: '18px',
    fontWeight: 'bold',
  },
  checkoutButton: {
    padding: '10px 20px',
    backgroundColor: '#28a745',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

export default Cart;
