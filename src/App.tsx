import React from 'react';
import './App.css';
import SellerDashboard from './component/sellerDashboard';
import PageHeader from './component/header';

function App() {
  return (
    <div className="App">
      <PageHeader />
      <div className="container is-max-desktop">
        <SellerDashboard />
      </div>
    </div>
  );
}

export default App;
