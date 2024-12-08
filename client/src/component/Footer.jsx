// src/components/Footer.js

import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <p>&copy; 2024 Task Tracker App. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#3585db',
    color: 'white',
    padding: '10px 0',
    textAlign: 'center',
    bottom: '0',
    width: '100%',
    position:"static"
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
  },
};

export default Footer;
