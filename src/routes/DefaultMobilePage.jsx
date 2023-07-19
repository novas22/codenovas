import React from 'react';

function DefaultMobilePage() {
  return (
    <div style={styles.container}>
        <img src="https://res.cloudinary.com/duw2d3yeh/image/upload/v1689329652/course/blob_qxyzbn.png" height={90} width={150} alt="codenovas"/>
      <h1 style={styles.title}>Codenovas</h1>
      <p style={styles.description}>This website is currently not available for mobile view.</p>
    </div>
  );
}

export default DefaultMobilePage;

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f5f5f5',
    padding: '20px',
    textAlign: 'center',
  },
  title: {
    fontSize: '32px',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
  description: {
    fontSize: '18px',
    marginBottom: '20px',
  },
};
