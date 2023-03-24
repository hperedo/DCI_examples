import Navbar from './component/Navabar/Navbar';
import Footer from './component/Footer/Footer';
import Hero from './component/Hero/Hero';
import './App.scss';
import React from 'react';

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Hero />
      <Footer company="Geeker's" />
    </>
  );
}
