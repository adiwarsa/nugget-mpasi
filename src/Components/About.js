import React, { useState } from "react";
import AboutBackground from "../Assets/about-background.png";
import NuggetTalenan from "../Assets/nagetalenan.jpg";
import { Button, Modal, Backdrop, Fade } from "@mui/material";

const About = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="about-section-container" id="about">
      <div className="about-background-image-container">
        <img className="colored-image" src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img className="rounded-5" src={NuggetTalenan} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">
          Nugget Plum & Blum Tinggi Energi dan Protein
        </h1>
        <p className="primary-text">
          Nugget Plum & Blum kaya akan nutrisi khususnya energi dan protein yang bermanfaat bagi pertumbuhan dan perkembangan balita, selain itu Nugget Plum & Blum kaya akan vitamin dan mineral yang dapat meningkatkan sistem kekebalan tubuh
        </p>
        <div className="about-buttons-container">
          <Button
            variant="contained"
            className="secondary-button" // Use your custom button class
            onClick={openModal}
          >
            Selengkapnya
          </Button>
        </div>
      </div>

      <Modal
        open={modalOpen}
        onClose={closeModal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={modalOpen}>
          <div className="modal-content">
            <div className="modal-section">
              <h2>DESKRIPSI UMUM</h2>
              <p>
                PT. FIFONUT adalah Perusahaan yang memproduksi makanan pendamping ASI dalam bentuk finger food berupa nugget. Di era globalisasi ini banyak ibu yang memilih sebagai wanita karir, namun juga harus tetap memperhatikan pemenuhan gizi anak dan akhirnya memilih memberikan makanan yang praktis dan instan kepada anak, sehingga perusahaan kami mengembangkan finger food nugget sebagai MPASI yang praktis untuk disajikan dan memiliki nilai gizi tinggi. FIFONUT mempunyai peluang yang sangat besar dalam penjualan produk MPASI Ready to Eat.
              </p>
            </div>
            <div className="modal-section">
              <h2>VISI</h2>
              <p>
                “Mengembangkan Finger Food Nugget dengan bahan baku berkualitas, inovatif dan bernilai gizi tinggi untuk kesehatan dan pemenuhan gizi balita”
              </p>
            </div>
            <div className="modal-section">
              <h2>MISI</h2>
              <ul>
                <p>Mengembangkan inovasi baru dengan memanfaatkan bahan pangan bernilai gizi tinggi untuk meningkatkan aspek gizi dan nilai jual.</p>
                <p>Mengefisienkan waktu dalam menyiapkan MPASI untuk balita.</p>
                <p>Mencegah defisiensi gizi pada balita melalui pemberian MPASI yang berkualitas dan bernilai gizi tinggi.</p>
                <p>Menginformasikan kepada masyarakat mengenai Finger Food Nugget dengan mengembangkan usaha berbasis digital marketing.</p>
              </ul>
            </div>
          </div>
        </Fade>

      </Modal>
    </div>
  );
};

export default About;
