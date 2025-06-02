import React from 'react';
import Navbar from '@/Components/Common/Navbar';
import './globals.css';
import { SearchProvider } from '../Components/context/SearchContext';
import Footer from "../Components/Common/Footer"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <SearchProvider>
          <Navbar />
          {children}
          <Footer/>
        </SearchProvider>
      </body>
    </html>
  );
}