'use client';
import Link from 'next/link';

const Footer = () => {
  const styles = {
    footer: {
      backgroundColor: 'black',
      color: 'white',
      padding: '40px 20px',
      marginTop: 'auto',
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
       marginLeft: 0,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      gap: '20px',
    },
    links: {
      display: 'flex',
      gap: '20px',
      flexWrap: 'wrap',
      justifyContent: 'center',
    },
    link: {
      color: 'white',
      textDecoration: 'none',
      fontSize: '14px',
    },
    copy: {
      fontSize: '13px',
      color: '#aaa',
    },
  };

  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.links}>
          <Link href="/" style={styles.link}>Home</Link>
          <Link href="/" style={styles.link}>About</Link>
          <Link href="/" style={styles.link}>Contact</Link>
          <Link href="/" style={styles.link}>Privacy Policy</Link>
          <Link href="/" style={styles.link}>Terms of Service</Link>
        </div>
        <div style={styles.copy}>
          &copy; {new Date().getFullYear()} Shopping Hub. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
