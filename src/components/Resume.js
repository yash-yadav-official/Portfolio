
import React from 'react';
import Data from '../data/data';

function Resume() {
  return (
    <article className="resume active" data-page="resume">
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
                <li className="skills-tech-list">
                  <span className="timeline-text">
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
  );
}

export default Resume;