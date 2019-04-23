import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';

export default function Menu() {
  return (
    <div>
      <div className="menu">
        <Link to="/">&#9776;</Link>
      </div>
    </div>

  );
}
