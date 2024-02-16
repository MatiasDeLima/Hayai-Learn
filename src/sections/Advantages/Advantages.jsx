import React from 'react';
import "./Advantages.css";
import AdvantagesCard from '../../components/AdvantagesCard/AdvantagesCard.jsx';

const Advantages = () => {
  return (
    <section className="demo section">
      <h2 className="demo__title">
        The <span className="orange__text-color">Advantage</span> of <br/>
        <span className="orange__text-color">Language</span> <span className="demo__title-line">Immersion</span>
      </h2>
      <div className="demo__container container grid">
        <AdvantagesCard />
      </div>
    </section>
  )
}

export default Advantages