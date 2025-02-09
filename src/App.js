import React from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Gallery from './components/Gallery';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import './styles.css';

const App = () => (
  <div className="container">
    <Header />
    <Navbar />
    <h2 className="slogan">Limpio. Humedad. Care.</h2>
    <p className="welcome">
      Bienvenidos a S&D Store, tu destino en línea para todo lo relacionado con el estilo y la funcionalidad. En nuestra plataforma, disponible en <strong>www.S&DStore.com</strong>, nos especializamos en ofrecer una variedad de productos cuidadosamente seleccionados para satisfacer las necesidades de nuestros clientes.
    </p>
    <Gallery />
    <Newsletter />
    <Footer />
  </div>
);

export default App;

