import React from "react";
import "../styles/Resume.css";

const Resume = () => {
  return (
    <div className="resume">
      <h1>Resume</h1>
      <h2>Technical Skills</h2>
      <hr />
      <div className="holder">
        <div className="left">
          <p className="tech-skill">
            <strong>Languages: </strong>JavaScript, TypeScript, HTML/CSS, C#,
            MySQL
          </p>
          <p className="tech-skill">
            <strong>Frameworks/Libraries: </strong>React, Redux, Remix, Node.js,
            .NET, Prisma, Socket.io, Material-UI, Bootstrap
          </p>
          <p className="tech-skill">
            <strong>Baas: </strong>Firebase, Fly.io
          </p>
          <p className="tech-skill">
            <strong>Developer Tools: </strong>Git, VScode, Postman, PostgreSQL,
            MySQL Workbench
          </p>
          <p className="tech-skill5">
            <strong>Non-Technical: </strong>REST API's, DRY coding, Object
            Oriented Programming, Test Driven Development, Pair Programming
          </p>
        </div>
      </div>
      <h2>Education</h2>
      <hr />
      <div className="holder">
        <div className="left">
          <p className="bold">
            <strong>Epicodus</strong>
          </p>
          <p className="italic">
            <em>27 week full time Full-Stack Development program</em>
          </p>
          <ul>
            <li>Built 100+ projects using JavaScript, C#, React, HTML/CSS.</li>
            <li>Passed all project submissions without having to resubmit.</li>
            <li>
              Team building and communication skills built through pair
              programming.
            </li>
          </ul>
        </div>
        <div className="right">
          <p className="bold">
            <strong>Portland, OR</strong>
          </p>
          <p className="italic">
            <em>Oct. 2022 - Mar. 2023</em>
          </p>
        </div>
      </div>
      <div className="holder">
        <div className="left">
          <p className="bold">
            <strong>University Nevada Las Vegas</strong>
          </p>
          <p className="italic">
            <em>Mathematics</em>
          </p>
        </div>
        <div className="right">
          <p className="bold">
            <strong>Las Vegas, NV</strong>
          </p>
          <p className="italic">
            <em>2006</em>
          </p>
        </div>
      </div>
      <h2>Experience</h2>
      <hr />
      <div className="holder">
        <div className="left">
          <p className="bold">
            <strong>Full-Stack Developer Intern</strong>
          </p>
          <p className="italic">
            <em>EyeCue Lab</em>
          </p>
          <ul>
            <li>
              Learn and use Remix/TypeScript and Material-UI with Prisma and
              PostreSQL for database management.
            </li>
            <li>
              Work using agile methodologies while meeting for scrum once a day
              and one client meeting a week.
            </li>
            <li>Create an event planning app for a mock client.</li>
          </ul>
        </div>
        <div className="right">
          <p className="bold">
            <strong>Mar. 2023 - May 2023</strong>
          </p>
          <p className="italic">
            <em>Portland, OR</em>
          </p>
        </div>
      </div>
      <div className="holder">
        <div className="left">
          <p className="bold">
            <strong>Cabinet Foreman/CNC Operator/Carpenter III</strong>
          </p>
          <p className="italic">
            <em>Versatile Wood Products</em>
          </p>
          <ul>
            <li>
              Review shop drawings for accuracy and engineering concerns, both
              in initial drafts with sales team and final drafts with product
              design team.
            </li>
            <li>Responsible for programming and operating the CNC machine.</li>
            <li>
              Responsible for meeting all shop deadlines and brand standards for
              construction while maintaining over a 10% profit margin.
            </li>
            <li>
              Meet with carpenters to discuss upcoming projects and deadlines as
              well as delegate duties.
            </li>
          </ul>
        </div>
        <div className="right">
          <p className="bold">
            <strong>
              Mar. 2022 - Sept. 2022
              <br />
              Feb. 2013 - Dec. 2016
            </strong>
          </p>
          <p className="italic">
            <em>Portland, OR</em>
          </p>
        </div>
      </div>
      <div className="holder">
        <div className="left">
          <p className="bold">
            <strong>Shop Manager/Carpenter</strong>
          </p>
          <p className="italic">
            <em>Earthbound Industries</em>
          </p>
          <ul>
            <li>
              Responsible for meeting all shop deadlines and brand standards for
              construction and installation of cabinets, built-ins, and
              furniture doubling the output of the company.
            </li>
            <li>
              Create 3D renderings of projects using Google SketchUp for clients
              to view and shop drawings.
            </li>
            <li>Provide time and cost estimates to clients.</li>
            <li>Meet with carpenters to discuss jobs and deligate duties.</li>
          </ul>
        </div>
        <div className="right">
          <p className="bold">
            <strong>Apr. 2017 - Mar. 2022</strong>
          </p>
          <p className="italic">
            <em>Portland, OR</em>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Resume;
