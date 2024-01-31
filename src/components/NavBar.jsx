// src/components/NavBar.jsx
import React from 'react';
import CartWidget from '/CartWidget';
import Brand from '/Brand';

function NavBar() {
  return (
    <div>
      <Brand />
      <CartWidget />
    </div>
  );
}

export default NavBar;
