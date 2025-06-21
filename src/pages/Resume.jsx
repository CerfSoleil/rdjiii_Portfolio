import React from "react";
import "../styles/Resume.css";

const Resume = () => {
  return (
    <div className="resume">
      <h1>Resume</h1>
      <h3>Offers capabilities in Team Management, Creative Direction, Customer Service.</h3>
      <h4>Technology skills:</h4>
      <ul className="skills-list">
        <li>Coding Languages: HTML, JavaScript, CSS, MongoDB, SQL, Node.js, and Express</li>
        <li>Adobe: Photoshop, Premier, After Effects, and Lightroom</li>
        <li>Computer hardware assembly and maintenance</li>
        <li>Digital and Mirrorless Cameras</li>
      </ul>
      <hr />
      <a
        href="/placeholder-resume.pdf"
        download="Resume.pdf"
        className="resume-download"
      >
        Download My Resume
      </a>
      <div className="resume-lists">
        <div className="resume-section">
          <h2>Full-Stack Web Development</h2>
          <ul>
            <li><b>FrontEnd</b></li>
            <ul>
              <li>Javascript</li>
              <ul>
                <li>Using JavaScript, and its sister typed language Typescript, as the main coding language to create applications.</li>
                <li>Using React, Express, and Node.js to create full-stack applications.</li>
              </ul>
              <li>HTML & CSS</li>
              <ul>
                <li>Using HTML and CSS to create responsive and accessible web pages.</li>
                <li>Creating my own styling without the use of CSS frameworks to ensure a unique and tailored design.</li>
              </ul>
            </ul>
            <li><b>BackEnd</b></li>
            <ul>
              <li>SQL</li>
              <ul>
                <li>Using SQL to create, read, update, and delete data in a database.</li>
                <li>Creating and managing database schemas as well as relationships between tables.</li>
              </ul>
              <li>MongoDB</li>
              <ul>
                <li>Using MongoDB to store and retrieve data in a NoSQL database.</li>
                <li>Creating and managing collections and documents.</li>
                <li>Using compass to maintain and query databases.</li>
              </ul>
            </ul>
            <li><b>GitHub</b></li>
            <ul>
              <li>Using GitHub to manage code repositories and collaborate with other developers.</li>
              <li>Creating pull requests and managing branches.</li>
              <li>Using GitHub Actions to automate workflows and implement CI/CD.</li>
            </ul>
          </ul>
        </div>
        <div className="resume-section">
          <h2>Independent Caregiver</h2>
          <p>Providing 24/7 living assistance for an individual with significant disability.</p>
          <br></br>
          <ul>
            <li><b>Medical Administration</b></li>
            <ul>
              <li>Interfacing with nurses and doctors</li>
              <ul>
                <li>Arranging transport and appointments.</li>
                <li>Maintaining patient comfort and communicating wishes.</li>
                <li>Ensuring proper nutrition within dietary restrictions.</li>
              </ul>
            </ul>
          </ul>
          <ul>
            <li><b>Financial Manager</b></li>
            <ul>
              <li>Responsible for reconciling financial records and ensuring the accuracy of all accounting entries.</li>
              <li>Managed day-to-day accounts payable and budget forecasting to ensure fiscal responsibility.</li>
            </ul>
          </ul>
          <ul>
            <li><b>Wellbeing</b></li>
            <ul>
              <li>Providing emotional support and companionship.</li>
              <li>Fostering meaningful day-to-day activities to stimulate continued mental engagement.</li>
            </ul>
          </ul>
        </div>
        <div className="resume-section">
          <h2>Manager and Lead</h2>
          <ul>
            <li><b>Management</b></li>
            <ul>
              <li>Make logistical decisions and relegate tasks evenly for completion of duties in a timely manner.</li>
              <li>Maintain experience in applicable fields to fill in for missing roles.</li>
              <ul>
                <li>Temporarily taking on the applicable job title.</li>
              </ul>
            </ul>
          </ul>
          <ul>
            <li><b>Employee Training</b></li>
            <ul>
              <li>Maintaining a complete understanding of guidelines and practices.</li>
              <li>Learning protocol and regulation thoroughly enough to explain them to new and existing employees.</li>
            </ul>
          </ul>
          <ul>
            <li><b>Conflict Resolution</b></li>
            <ul>
              <li>Handle incidents between employees and patrons/customers alike.</li>
              <li>Handle emergency scenarios with a level head and optimal outcome.</li>
            </ul>
          </ul>
        </div>
        <div className="resume-section">
          <h2>Video Editing</h2>
          <ul>
            <li><b>Video Editing</b></li>
            <ul>
              <li>Forming and consistantly updating a skill with Adobe video creation software.</li>
              <li>Utilizing narritive direction, graphic design while keeping up to date on online culture and digital trends. </li>
              <ul>
                <li>Sourcing royalty-free and creative common assest applicable to the creation of media.</li>
              </ul>
            </ul>
            <li><b>Online Marketing</b></li>
            <ul>
              <li>Adherence to SEO and video site trends to cultivate reach through search engines and engagement.</li>
            </ul>
            <li><b>Client Relationship</b></li>
            <ul>
              <li>Communicating with clients to ensure the final product meets their expectations.</li>
              <li>Understanding client needs and adapting video content accordingly.</li>
            </ul>
          </ul>
        </div>
        <div className="resume-section">
          <h2>Voice Acting</h2>
          <ul>
            <li><b>Project Delivery</b></li>
            <ul>
              <li>Delivering high-quality audio recordings for various projects to meet client specifications.</li>
              <li>Maintaining consistant communication with clients to understand their vision and requirements for each project.</li>
            </ul>
            <li><b>Vocal Work</b></li>
            <ul>
              <li>Serve as a narrator and voice actor with clear and concise delivery.</li>
              <li>Effectively using articulation, accents, and emotion to deliver content as effectively as possible.</li>
            </ul>
          </ul>
        </div>
        <div className="resume-section">
          <h2>Computer Technician</h2>
          <ul>
            <li><b>Fix Undiagnosed Issues</b></li>
            <ul>
              <li>Use my knowledge of hardware and software to troubleshoot issues with client systems.</li>
              <ul>
                <li>Analyze the best way to handle issues with minimal loss and intrusion to customer data.</li>
              </ul>
            </ul>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Resume;
