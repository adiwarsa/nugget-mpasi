import React from "react";

const Work = () => {
  const workInfoData = [
    {
      title: "ENERGI",
      text: "170 Kalori",
    },
    {
      title: "PROTEIN",
      text: "8 Gram",
    },
    {
     
      title: "LEMAK",
      text: "1,5 Gram",
    },
    {
      title: "KARBOHIDRAT",
      text: "32 Gram",
    },
  ];
  return (
    <div className="work-section-wrapper" id="gizi">
      <div className="work-section-top">
        <p className="primary-subheading">Gizi</p>
        <h1 className="primary-heading">Kandungan Gizi</h1>
        <p className="primary-text">
          Kandungan Gizi per 100gram Nugget Plum & Blum FIFONUT
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <h2 className="tittle-gizi">{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
