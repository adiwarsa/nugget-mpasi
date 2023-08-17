import React from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import "react-awesome-slider/dist/custom-animations/cube-animation.css"; // Choose an animation style
import ProfilePic from "../Assets/profile.webp";

const Testimonial = () => {
  const mahasiswa = [
    {
      nama: "Ni Putu Trisna Widyanthi",
      nim: "(P0131219001)",
    },
    {
      nama: "Ni Putu Setya Puri Cahyani",
      nim: "(P0131219002)",
    },
    {
      nama: "Ni Komang Ariani Dewi",
      nim: "(P0131219004)",
    },
    {
      nama: "Ni Made Diah Kurnia Dewi",
      nim: "(P0131219025)",
    },
    {
      nama: "Ni Kadek Mita Dwi Adnyani",
      nim: "(P0131219026)",
    },
    {
      nama: "I Gede Nanda Pranayoga",
      nim: "(P0131219027)",
    },
    {
      nama: "Putu Eka Putri Ariyani",
      nim: "(P0131219028)",
    },
    {
      nama: "Ni Putu Emi",
      nim: "(P0131219029)",
    },
    {
      nama: "I Komang Krina Brahmantiya",
      nim: "(P0131219030)",
    },
    {
      nama: "Ni Made Sasmira Trisnasari",
      nim: "(P0131219031)",
    },
    {
      nama: "Made Maya Adinda Silviana",
      nim: "(P0131219032)",
    },

    
  ];

  return (
    <div className="work-section-wrapper" id="aboutus">
      <div className="work-section-top">
        <p className="primary-subheading">About Us</p>
        <h1 className="primary-heading">PT.FIFONUT</h1>
        <p className="primary-text">
          11 Mahasiswa Jurusan Gizi Poltekkes Kemenkes Denpasar Mengembangkan
          Product MPASI Bagi Balita Kaya Akan Energi Dan Protein
        </p>
      </div>
      <div className="testimonial-section-bottom">
        <AwesomeSlider>
          {mahasiswa.map((mhs, index) => (
            <div key={index} className="slider-content"> {/* Apply the class here */}
              <img className="prof-pic" src={ProfilePic} alt="" />
              <p>{mhs.nama}</p>
              <h2>{mhs.nim}</h2>
            </div>
          ))}
        </AwesomeSlider>
      </div>
    </div>
  );
};

export default Testimonial;
