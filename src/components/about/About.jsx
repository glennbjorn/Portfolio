import React from "react";
import "./about.css";
import AboutImg from "../../assets/about-img.jpg";
import { GiTiedScroll } from "react-icons/gi";
import { GiStairsGoal } from "react-icons/gi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={AboutImg} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <GiTiedScroll className="about__icon" />
              <h5>Education</h5>
              <small>Year 3 NUS Business Analytics</small>
            </article>
            <article className="about__card">
              <GiStairsGoal className="about__icon" />
              <h5>Mission</h5>
              <small>Empower the differently-abled</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>2 completed</small>
            </article>
          </div>

          <p>
            I am passionate about making a difference using technology. I
            consider myself driven and competitive, but I also champion for
            mental wellness and discourage people from burning out. I am
            meticulous and task-oriented. In a team, I play the role of a
            risk-evaluator more often than a creative thinker, though
            problem-solving is one of my strengths. Outside of work, I am a
            caring individual who will look out for my peers and colleagues and
            be their listening ear.
          </p>

          <a href="#contacts" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
