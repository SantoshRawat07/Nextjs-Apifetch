'use client';

const Footer: React.FC = () => {
  const styles = {
    footer: {
      backgroundColor: 'black',
      color: 'white',
      padding: '40px 20px',
      marginTop: 'auto',
    },
    copy: {
      fontSize: '13px',
      color: '#aaa',
      textAlign: 'center' as const,
    },
  };

  return (
    <footer style={styles.footer}>
      <div style={styles.copy}>
        &copy; {new Date().getFullYear()} Shopping Hub. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;