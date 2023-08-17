import React from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import Nugget from "../Assets/nugget.jpg"
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <div className="home-container" id="#home">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img className="colored-image" src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            Nugget <br></br> Plum & Blum
          </h1>
          <p className="primary-text">
         Nugget Plum & Blum merupakan nugget inovatif yang di produksi dengan menggabungkan berbagai jenis pangan lokal. Adapun bahan pangan yang ditambahkan dalam produk ini yaitu daging ayam, daging lele, keju, wortel dan bayam.
          </p>
          <a style={{ paddingLeft: '20px' }}>
            Price: Rp. 30.000/12pcs
          </a>
          <a href="https://api.whatsapp.com/send?phone=6281339313519&text=Hello%20saya%20ingin%20memesan%20FIFONUT" target="_blank" className="secondary-button">
            Order Now <FiArrowRight />
          </a>
        </div>
        <div className="home-image-section">
          <img className="rounded" src={Nugget} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
