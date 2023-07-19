import React from 'react'
import './header.css';

export default function PageHeader() {
  return (
    <nav className="navbar is-info">
        <div className="navbar-brand">
        <a className="navbar-item" id='app-title' href="#">Auction Bidding System</a>
        </div>
    </nav>
  )
}
