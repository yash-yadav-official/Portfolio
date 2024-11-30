import React, { useState } from 'react';
import './App.css';
import Data from './data/data';

function App() {
  const [activeTab, setActiveTab] = useState(0);
  const [sidebarActive, setSidebarActive] = useState(false);
  const [modalActive, setModelActive] = useState(false)



  const [testimonial, setTestimonial] = useState(Data.testimonials[0])

  return (
    <main>

      <aside className={`sidebar ${sidebarActive ? 'active' : ''}`} data-sidebar>

        <div className="sidebar-info">

          <figure className="avatar-box">
            <img src={Data.personalInfo.avatar} alt={Data.personalInfo.name} width="80" />
          </figure>

          <div className="info-content">
            <h1 className="name" title={Data.personalInfo.name}>{Data.personalInfo.name}</h1>

            <p className="title">{Data.personalInfo.title}</p>
          </div>

          <button className="info_more-btn" id="data-sidebar-btn" onClick={() => setSidebarActive(!sidebarActive)}>
            <span>Show Contacts</span>

            <ion-icon name="chevron-down"></ion-icon>
          </button>

        </div>

        <div className="sidebar-info_more">

          <div className="separator"></div>

          <ul className="contacts-list">

            <li className="contact-item">

              <div className="icon-box">
                <ion-icon name="mail-outline"></ion-icon>
              </div>

              <div className="contact-info">
                <p className="contact-title">Email</p>

                <a href={`mailto:${Data.personalInfo.email}`} className="contact-link">{Data.personalInfo.email}</a>
              </div>

            </li>

            <li className="contact-item">

              <div className="icon-box">
                <ion-icon name="phone-portrait-outline"></ion-icon>
              </div>

              <div className="contact-info">
                <p className="contact-title">Phone</p>

                <a href={`tel:${Data.personalInfo.phone}`} className="contact-link">{Data.personalInfo.phone}</a>
              </div>

            </li>

            <li className="contact-item">

              <div className="icon-box">
                <ion-icon name="calendar-outline"></ion-icon>
              </div>

              <div className="contact-info">
                <p className="contact-title">Birthday</p>

                <time dateTime={Data.personalInfo.birthday}>{new Date(Data.personalInfo.birthday).toLocaleDateString()}</time>
              </div>

            </li>

            <li className="contact-item">

              <div className="icon-box">
                <ion-icon name="location-outline"></ion-icon>
              </div>

              <div className="contact-info">
                <p className="contact-title">Location</p>

                <address>{Data.personalInfo.location}</address>
              </div>

            </li>

          </ul>

          <div className="separator"></div>

          <ul className="social-list">

            {Data.socialLinks.map((link, index) => (
              <li className="social-item" key={index}>
                <a href={link.url} className="social-link">
                  <ion-icon name={link.name}></ion-icon>
                </a>
              </li>
            ))}

          </ul>

        </div>

      </aside>

      <div className="main-content">

        <nav className="navbar">

          <ul className="navbar-list">

            <li className="navbar-item">
              <button className={`navbar-link ${activeTab === 0 ? 'active' : ''}`} onClick={() => setActiveTab(0)} data-nav-link>About</button>
            </li>

            <li className="navbar-item">
              <button className={`navbar-link ${activeTab === 1 ? 'active' : ''}`} onClick={() => setActiveTab(1)} data-nav-link>Resume</button>
            </li>

            <li className="navbar-item">
              <button className={`navbar-link ${activeTab === 2 ? 'active' : ''}`} onClick={() => setActiveTab(2)} data-nav-link>Portfolio</button>
            </li>

            <li className="navbar-item">
              <button className={`navbar-link ${activeTab === 3 ? 'active' : ''}`} onClick={() => setActiveTab(3)} data-nav-link>Chatbot</button>
            </li>

          </ul>

        </nav>

        <article className={`about ${activeTab === 0 ? 'active' : ''}`} data-page="about">

          <header>
            <h2 className="h2 article-title">About me</h2>
          </header>

          <section className="about-text">
            {Data.description.map((desc, index) => (
              <p key={index}>{desc}</p>
            ))}
          </section>

          <section className="service">

            <h3 className="h3 service-title">What i'm doing</h3>

            <ul className="service-list">
              {Data.services.map((service, index) => (
                <li className="service-item" key={index}>

                  <div className="service-icon-box">
                    <img src={`${service.icon}`} alt="design icon" width="40" />
                  </div>

                  <div className="service-content-box">
                    <h4 className="h4 service-item-title">{service.title}</h4>

                    <p className="service-item-text">
                      {service.description}
                    </p>
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
                  setTestimonial(testimonial)
                  setModelActive(true)
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

          <div className={`modal-container  ${modalActive ? 'active' : ''}`} data-modal-container>

            <div className={`overlay  ${modalActive ? 'active' : ''}`} onClick={() => {
              setModelActive(false)
            }} data-overlay></div>

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
                  <p>
                    {testimonial.testimonial}
                  </p>
                </div>

              </div>

            </section>

          </div>

        </article>

        <article className={`resume ${activeTab === 1 ? 'active' : ''}`} data-page="resume">

          <header>
            <h2 className="h2 article-title">Resume</h2>
          </header>

          <section className="timeline">

            <div className="title-wrapper">
              <div className="icon-box">
                <ion-icon name="book-outline"></ion-icon>
              </div>

              <h3 className="h3">Education</h3>
            </div>

            <ol className="timeline-list">
              {Data.education.map((edu, index) => (
                <li className="timeline-item" key={index}>
                  <h4 className="h4 timeline-item-title">{edu.title}</h4>
                  <span>{edu.timespan}</span>
                  <p className="timeline-text">{edu.description}</p>
                </li>
              ))}
            </ol>

          </section>

          <section className="timeline">

            <div className="title-wrapper">
              <div className="icon-box">
                <ion-icon name="book-outline"></ion-icon>
              </div>

              <h3 className="h3">Experience</h3>
            </div>

            <ol className="timeline-list">
              {Data.experience.map((exp, index) => (
                <li className="timeline-item" key={index}>
                  <h4 className="h4 timeline-item-title">{exp.title}</h4>
                  <span>{exp.timespan}</span>
                  <p className="timeline-text">{exp.description}</p>
                </li>
              ))}
            </ol>

          </section>

          <section className="skill">

            <h3 className="h3 skills-title">My skills</h3>

            <ul className="skills-list content-card">

              {Data.skills.map((skill, index) => (
                <li className="skills-item" key={index}>

                  <div className="title-wrapper">
                    <h5 className="h5">{skill.category}</h5>
                  </div>
                  <ul>
                    <li class="skills-tech-list">
                      <span class="timeline-text">
                        {skill.list.map((item, index) => (
                          `${item} ${index === skill.list.length - 1 ? ' ' : ' • '}`
                        ))}
                      </span>
                    </li>
                  </ul>
                </li>
              ))}
            </ul>

          </section>

        </article>

        <article className={`portfolio ${activeTab === 2 ? 'active' : ''}`} data-page="portfolio">

          <header>
            <h2 className="h2 article-title">Portfolio</h2>
          </header>

          <section className="projects">
            <ul className="project-list">

              {Data.projects.map((project, index) => (
                <li className="project-item active" data-filter-item data-category={project.category.toLowerCase()} key={index}>
                  <a href="#">
                    <figure className="project-img">
                      <div className="project-item-icon-box">
                        <ion-icon name="eye-outline"></ion-icon>
                      </div>
                      <img src={project.img} alt={project.title} loading="lazy" />
                    </figure>
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-category">{project.category}</p>
                  </a>
                </li>
              ))}
            </ul>
          </section>
        </article>

        <article className={`portfolio ${activeTab === 3 ? 'active' : ''}`} data-page="portfolio">

          <header>
            <h2 className="h2 article-title">Chatbot</h2>
          </header>

          <section className="chatlog">

          </section>
        </article>

      </div>

    </main >
  );
}

export default App;
