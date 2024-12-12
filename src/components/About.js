
import React from 'react';
import Data from '../data/data';

function About() {
  let [modalActive, setModelActive] = React.useState(false)
  const [testimonial, setTestimonial] = React.useState(Data.testimonials[0]);

  return (
    <article className="about active" data-page="about">
      <header>
        <h2 className="h2 article-title">About me</h2>
      </header>

      <section className="about-text">
        {Data.description.map((desc, index) => (
          <p key={index}>{desc}</p>
        ))}
      </section>

      <section className="service">
        <h3 className="h3 service-title">What I'm doing</h3>
        <ul className="service-list">
          {Data.services.map((service, index) => (
            <li className="service-item" key={index}>
              <div className="service-icon-box">
                <img src={`${service.icon}`} alt="design icon" width="40" />
              </div>
              <div className="service-content-box">
                <h4 className="h4 service-item-title">{service.title}</h4>
                <p className="service-item-text">{service.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="testimonials">
        <h3 className="h3 testimonials-title">Testimonials</h3>
        <ul className="testimonials-list has-scrollbar">
          {Data.testimonials.map((testimonial, index) => (
            <li className="testimonials-item" key={index} onClick={() => {
              setTestimonial(testimonial);
              setModelActive(true);
            }}>
              <div className="content-card" data-testimonials-item>
                <figure className="testimonials-avatar-box">
                  <img src={testimonial.img} alt={testimonial.name} width="60" data-testimonials-avatar />
                </figure>
                <h4 className="h4 testimonials-item-title" data-testimonials-title>{testimonial.name}</h4>
                <div className="testimonials-text" data-testimonials-text>
                  <p>{testimonial.testimonial}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <div className={`modal-container ${modalActive ? 'active' : ''}`} data-modal-container>
        <div className={`overlay ${modalActive ? 'active' : ''}`} onClick={() => setModelActive(false)} data-overlay></div>
        <section className="testimonials-modal">
          <button className="modal-close-btn" data-modal-close-btn onClick={() => setModelActive(false)}>
            <ion-icon name="close-outline"></ion-icon>
          </button>
          <div className="modal-img-wrapper">
            <figure className="modal-avatar-box">
              <img src={`${testimonial.img}`} alt={`${testimonial.name}`} width="80" data-modal-img />
            </figure>
            <img src="./assets/images/icon-quote.svg" alt="quote icon" />
          </div>
          <div className="modal-content">
            <h4 className="h3 modal-title" data-modal-title>{testimonial.name}</h4>
            <time dateTime="2021-06-14">{testimonial.datatime}</time>
            <div data-modal-text>
              <p>{testimonial.testimonial}</p>
            </div>
          </div>
        </section>
      </div>
    </article>
  );
}

export default About;