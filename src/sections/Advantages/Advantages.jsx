import React from 'react';
import "./Advantages.css";
import AdvantagesCard from '../../components/AdvantagesCard/AdvantagesCard.jsx';
import { advantages } from '../../assets/data/index.js';

const Advantages = () => {
  return (
    <section className="advantages section">
      <h2 className="advantages__title">
        The <span className="orange__text-color">Advantage</span> of <br/>
        <span className="orange__text-color">Language</span> <span className="advantages__title-line">Immersion</span>
      </h2>
      <div className="advantages__container container grid">
       {advantages.map((e, index) => (
          <AdvantagesCard 
          key={e.id}
          title={e.title}
          text={e.content}
          icon={e.icon}
        />
       ))}
      </div>
    </section>
  )
}

export default Advantages