import React, { useState } from 'react';
import './App.css';
import Data from './data/data';
import About from './components/About';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Chatbot from './components/chat/Chatbot'; // Import the new Chatbot component

function App() {
  const [activeTab, setActiveTab] = useState(3);
  const [sidebarActive, setSidebarActive] = useState(false);
  const [modalActive, setModelActive] = useState(false);
  const [testimonial, setTestimonial] = useState(Data.testimonials[0]);

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

        {activeTab === 0 && <About Data={Data} setTestimonial={setTestimonial} setModelActive={setModelActive} testimonial={testimonial} modalActive={modalActive} setModelActive={setModelActive} />}
        {activeTab === 1 && <Resume Data={Data} />}
        {activeTab === 2 && <Portfolio Data={Data} />}
        {activeTab === 3 && <Chatbot />}
      </div>
    </main>
  );
}

export default App;
