import Navbar from './component/Navabar/Navbar';
import Alert from './component/Alert/Alert';
import Footer from './component/Footer/Footer';
import './App.scss';
import React from 'react';

export default function App() {
  return (
    <>
      <Navbar />
      <Alert message="don't tickle me!" name="agi" />
      <Footer company="Geeker's" />
    </>
  );
}
