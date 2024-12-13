import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.footerContent}>
        <p style={styles.footerText}>© 2024 Foodeagon. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#333',
    color: '#fff',
    padding: '20px',
    textAlign: 'center',
    position: 'fixed',
    bottom: 0,
    width: '100%',
  },
  footerContent: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerText: {
    fontSize: '14px',
  },
};

export default Footer;
