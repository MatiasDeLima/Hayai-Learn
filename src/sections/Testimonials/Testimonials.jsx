import React from 'react';
import "./Testimonials.css";
import Button from "../../components/Button/Button.jsx";
import { testimonialsImage } from "../../assets/images/index.js";
import TestimonialsCard from '../../components/TestimonialsCard/TestimonialsCard.jsx';
import {testimonials} from "../../assets/data/index.js"; 

const Testimonials = () => {
  return (
    <section className="testemonials section">
      <div className="testimonials__container grid">
          <div className="testimonials__data">
              <h2 className="testimonials__title">
                Hear from Our Japanese Learners!
              </h2>

              <p className="testimonials__description-1">
                Welcome to our testimonials section, where you can discover the inspiring 
                stories and experiences of our Japanese learners. Dive into a treasure 
                trove of insights, anecdotes, and triumphs.
              </p>

              <p className="testimonials__description-2">
                Explore firsthand accounts of language breakthroughs, cultural discoveries, 
                and personal growth as our learners navigate  world of Japanese language.
              </p>

              <Button 
                text="Learn More"
              />

              <img src={testimonialsImage} alt="" className="testimonials__data-img"/>

              <div className="testimonials__data-bg"></div>
          </div>

          <div className="testimonials__content container grid">
              {testimonials.map((test, index) => (
                <TestimonialsCard 
                  key={test.id}
                  image={test.img}
                  name={test.name}
                  status={test.status}
                  text={test.text}
                />
              ))}
          </div>
      </div>
    </section>
  )
}

export default Testimonials