import React from 'react';

const Gallery = () => (
  <section className="gallery">
    <h3>Productos Destacados</h3>
    <div className="gallery-grid">
      <div className="product">
        <img src="" alt="Producto 1" />
        <p>Prenda - $149.99</p>
      </div>
      <div className="product">
        <img src="" alt="Producto 2" />
        <p>Prenda - $1499.99</p>
      </div>
      <div className="product">
        <img src="" alt="Producto 3" />
        <p>Prenda - $349.99</p>
      </div>
    </div>
  </section>
);

export default Gallery;