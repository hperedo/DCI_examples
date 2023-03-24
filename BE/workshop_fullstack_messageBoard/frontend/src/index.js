import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import UserMessageCTXProvider from './UserMessageCTX';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <UserMessageCTXProvider>

      <App />
  </UserMessageCTXProvider>
  

);

