import React from "react";
import "./portfolio.css";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Past Experiences</h5>
      <h2>Portfolio</h2>

      <div className="category">
        <h2>Education</h2>

        <div className="category__input">
          <div className="milestone">
            <h4>National University of Singapore (NUS)</h4>
            <small>Aug 2020 - Present</small>
          </div>
          <article className="milestone__text">
            <ul>
              <li>Bachelor of Science in Business Analytics (Honours)</li>
              <li>NUS Merit Scholar</li>
              <li>CAP: 4.43 / 5.00</li>
            </ul>
          </article>
        </div>

        <div className="category__input">
          <div className="milestone">
            <h4>College of Alice & Peter Tan (CAPT)</h4>
            <small>Aug 2020 - Present</small>
          </div>
          <article className="milestone__text">
            <ul>
              <li>
                Graduate of the University Town College 
              </li>
            </ul>
          </article>
        </div>

        <div className="category__input">
          <div className="milestone">
            <h4>University for Peace (UPEACE)</h4>
            <small>Jun 2022 - Jul 2022</small>
          </div>
          <article className="milestone__text">
            <ul>
              <li>Entrepreneurship, Innovation and Social Change</li>
            </ul>
          </article>
        </div>

        <div className="category__input">
          <div className="milestone">
            <h4>Hwa Chong Institution</h4>
            <small>Jan 2012 - Dec 2017</small>
          </div>
          <article className="milestone__text">
            <ul>
              <li>Hwa Chong Institution Outstanding Student Award</li>
              <li>Faculty Committee Member (Athena)</li>
              <li>42nd High School Council</li>
            </ul>
          </article>
        </div>
      </div>

      <div className="category">
        <h2>Work Experiences</h2>

        <div className="category__input">
          <div className="milestone">
            <h4>
              NUS Enterprise, Summer Programme for Entrepreneurs Student
              Assistant
            </h4>
            <small>Feb 2022 - Present</small>
          </div>
          <article className="milestone__text">
            <ul>
              <li>
                Organiser for a two-week programme for over 100 aspiring
                entrepreneurs across ASEAN
              </li>
            </ul>
          </article>
        </div>

        <div className="category__input">
          <div className="milestone">
            <h4>Great Eastern, Financial Advisor Intern</h4>
            <small>Jun 2020</small>
          </div>
          <article className="milestone__text">
            <ul>
              <li>Learnt about market research and sales techniques</li>
            </ul>
          </article>
        </div>

        <div className="category__input">
          <div className="milestone">
            <h4>Ernst & Young, FATCA CRS Tax Services Intern</h4>
            <small>Jan 2020 - Apr 2020</small>
          </div>
          <article className="milestone__text">
            <ul>
              <li>
                Organiser for a webcast hosting up to 1000 ASEAN participants
              </li>
              <li>Worked on proposals to secure clients</li>
              <li>Aided with presentation decks and market research</li>
            </ul>
          </article>
        </div>
      </div>

      <div className="category">
        <h2>Projects</h2>

        <div className="category__input">
          <div className="milestone">
            <h4>
              <a href="https://new-generation.herokuapp.com" target="_blank">
                geneRATION
              </a>
              , Web Application (MEVN Stack)
            </h4>
            <small>May 2021 - Aug 2021</small>
          </div>
          <article className="milestone__text">
            <ul>
              <li>
                A food-drive management platform to help food-drive
                organisations reduce manpower and improve their efficiency
              </li>
            </ul>
          </article>

          <div className="milestone">
            <h4>Barrel Phones, Non-Camera Mobile Phone Startup</h4>
            <small>Jul 2018 - Oct 2018</small>
          </div>
          <article className="milestone__text">
            <ul>
              <li>
                Explored the potential market of military personnel who require
                non-camera phones in military bases
              </li>
            </ul>
          </article>

          <div className="milestone">
            <h4>Surabaya Community Service Project, Assistant Team Lead</h4>
            <small>Aug 2016 - Dec 2016</small>
          </div>
          <article className="milestone__text">
            <ul>
              <li>
                Led 24 students to prepare logistics and plan activities and
                lessons for the beneficiary school
              </li>
            </ul>
          </article>

          <div className="milestone">
            <h4>Project IDentity, Citi-YMCA Youth for Causes</h4>
            <small>Nov 2014 - Jun 2016</small>
          </div>
          <article className="milestone__text">
            <ul>
              <li>
                National Champion of Future Problem Solving Program (FPSP)
                Problem Solving Competition
              </li>
              <li>
                Taught a class of students with Intellectual Disability
                fortnightly to train them to handle money and handle a pop-up
                cafe
              </li>
              <li>
                Raised over $10,000 for the Movement for the Intellectually
                Disabled Singapore (MINDS) through street sales
              </li>
            </ul>
          </article>
        </div>
      </div>
      <div className="category">
        <h2>Honourable Mentions</h2>

        <div className="milestone">
          <h4>
            The Young Southeast Asian Leaders Initiative (YSEALI) Academic
            Fellowship 2022
          </h4>
          <small>Mar 2022 - May 2022</small>
        </div>
        <article className="milestone__text">
          <ul>
            <li>
              Singapore representative for Social Entrepreneurship and Economic
              Development at the University of Connecticut
            </li>
          </ul>
        </article>

        <div className="milestone">
          <h4>CAPT Support, Internal Vice Director</h4>
          <small>Jun 2021 - May 2022</small>
        </div>
        <article className="milestone__text">
          <ul>
            <li>
              Led a team of 25 members to champion for mental health awareness
              and peer support
            </li>
            <li>
              Oversee campaigns, student initiatives, and doubled up as the
              Finance Secretary, among other duties
            </li>
          </ul>
        </article>

        <div className="milestone">
          <h4>
            NUS Enterprise Summer Programme for Entrepreneurs, Student
            Ambassador
          </h4>
          <small>Jul 2021</small>
        </div>
        <article className="milestone__text">
          <ul>
            <li>
              Two-week programme to prepare aspiring entrepreneurs for the
              startup ecosystem
            </li>
            <li>
              Talks and lessons by existing entrepreneurs, industry
              professionals, venture capitalists, and mentors
            </li>
            <li>
              Led a group of ASEAN participants and NUS Masters students
              virtually to encourage networking among future leaders
            </li>
            <li>
              Learnt about social enterprises, job-creation, grit, and funding
            </li>
          </ul>
        </article>

        <div className="milestone">
          <h4>CAPT Dragon House Committee Member</h4>
          <small>Aug 2020 - May 2021</small>
        </div>
        <article className="milestone__text">
          <ul>
            <li>
              Organised bonding and welfare activities for 120 residents in the
              Dragon neighbourhood community
            </li>
          </ul>
        </article>

        <div className="milestone">
          <h4>
            Sports
          </h4>
        </div>
        <article className="milestone__text">
          <ul>
            <li>
              Singapore Sports School Council Colours Awards 2015 & 2016
            </li>
            <li>CAPT Inter-College Games 2022 Tchoukball Champions, Interest Group Head</li>
            <li>CAPT Inter-College Games 2022 Dodgeball 2nd Place</li>
            <li>CAPT Inter-College Games 2021 Tchoukball 3rd Place, Vice Captain</li>
            <li>CAPT Inter-College Games 2021 Dodgeball 3rd Place</li>
            <li>Hwa Chong Tchoukball A Division 3rd Place</li>
            <li>Hwa Chong Wushu Representative for A, B and C Divisions</li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
