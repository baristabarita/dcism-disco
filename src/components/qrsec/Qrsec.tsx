import React from "react";

import qrimg from "../../assets/images/qrcode.png";

const Qrsec: React.FC = () => {
  return (
    <section id="qrscan" className="items-center mt-5 py-4">
      <h1 className="text-[1em] md:text-[1.2em] lg:text-[1.3em] text-center italic font-bitter text-[#dadada] glow px-10 md:px-20">
        Delve into an enchanting night of radiance and wonder as we await the
        biggest & most-anticipated DCISM event this semester - with the theme,
        Disco Pajama Party!
        <br />
        <img src={qrimg} className="items-center mt-3 mx-auto" />
        <br />
        Scan the QR code, reserve yourself a seat and don’t miss this chance to
        mingle with the DCISM family, showcase your talents and achievements,
        and win amazing prizes and surprises. Join us for the DCISM Acquaintance
        Party 2024 and shine your stardust!
      </h1>
    </section>
  );
};

export default Qrsec;
