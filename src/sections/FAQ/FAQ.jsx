import React from "react";
import "./FAQ.css";

const FAQ = () => {
  return (
    <section className="faq section">
      <h2 className="faq__title">Frequently Ask <br/> 
      <span className="orange__text-color">Questions</span>
      </h2>

      <div className="faq__container container grid"></div>
    </section>
  );
};

export default FAQ;
