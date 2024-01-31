// src/components/ItemListContainer.jsx
import React from 'react';

function ItemListContainer({ greeting }) {
  return (
    <div>
      <h2>{greeting}</h2>
      <ul>
        <li>Juego</li>
        <li>Consola</li>
        <li>Notebook</li>
      </ul>
    </div>
  );
}

export default ItemListContainer;
