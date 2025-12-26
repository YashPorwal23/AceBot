
const Footer = () => {
  return (
    <footer style={{
  background: 'linear-gradient(to right, #0f2027, #203a43, #2c5364)',
  color: '#00ffcc',
  textAlign: 'center',
  padding: '40px 20px',
  fontFamily: 'monospace',
  marginTop: '50px',
  borderTop: '2px solid #00ffcc'
}}>
  <h2 style={{
    fontSize: '24px',
    marginBottom: '10px',
    letterSpacing: '2px'
  }}>
    💥 MONGO MAFIAS 💥
  </h2>
  <p style={{ fontSize: '16px', maxWidth: '600px', margin: '0 auto', color: '#ccc' }}>
    <strong></strong><span style={{ color: '#00ffcc' }}></span> <span style={{ color: '#61dafb' }}></span> <span style={{ color: '#f0db4f' }}></span><span style={{ color: '#3c873a' }}></span>
  </p>
  <p style={{ fontSize: '14px', marginTop: '15px', color: '#888' }}>
    💻 Data flows through us. APIs bow to us. Interfaces respect us. We are the <strong>MONGO MAFIAS</strong>.
  </p>
</footer>

  );
};

export default Footer;