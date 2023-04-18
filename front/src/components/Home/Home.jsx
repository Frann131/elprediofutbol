import Cards from "../Cards/Cards";
import { Promociones } from "../Promociones/Promociones";
import { Nosotros } from "../Nosotros/Nosotros";
import Carousel from "../Carousel/Carousel";
import Footer from "../Footer/Footer";

import Header from "../Header/Header";
import "./Home.module.css"
import { Contacto } from "../Contacto/Contacto";

const Home = () => {
  return (
    <div className="home-container">
      <Header />
      <Promociones />
      {/* <Carousel /> */}
      <Cards />
      <Nosotros />
      <Contacto />
      <Footer />
    </div>
  );
};

export default Home;
