'use client';

import Link from 'next/link';
import { useSearch } from "../context/SearchContext";
import { useEffect, useState } from "react";

const Navbar = () => {
  const { search, setSearch } = useSearch();
  const [isMd, setIsMd] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMd(window.innerWidth >= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const styles = {
   nav: {
    backgroundColor: 'black',
    color: 'white',
    position: 'fixed' as const,
    width: '100%',
    top: 0,
    boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
    zIndex: 1000,
  },
    container: {
      margin: '0 auto',
      padding: '16px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    brand: {
      fontSize: isMd ? '20px' : '28px',
      fontWeight: 'bold',
      letterSpacing: '1px',
      textDecoration: 'none',
      color: 'white',
      textAlign: 'left' as const, // Fix type error here
    },
    rightSection: {
      display: 'flex',
      alignItems: 'center',
      gap: '16px',
      flex: 1,
      justifyContent: 'flex-end',
    },
    searchInput: {
      padding: isMd ? '6px 10px' : '8px 12px',
      borderRadius: '4px',
      border: '1px solid #ccc',
      fontSize: isMd ? '12px' : '14px',
      width: isMd ? '130px' : '180px',
    },
    profileIcon: {
      width: '32px',
      height: '32px',
      borderRadius: '50%',
      backgroundColor: '#444',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '16px',
      color: 'white',
      cursor: 'pointer',
      marginLeft: '20px',
    },
  };

  return (
    <nav style={styles.nav}>
      <div style={styles.container}>
        <Link href="/">
          <span style={styles.brand}>Shopping Hub</span>
        </Link>
        <div style={styles.rightSection}>
          <input
            type="text"
            placeholder="Search products..."
            style={styles.searchInput}
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          {!isMd && (
            <div style={styles.profileIcon} title="Profile">
              🧑
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;