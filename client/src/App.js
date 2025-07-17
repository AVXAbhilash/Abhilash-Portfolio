import { useEffect, useState } from "react";
import './App.css';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://abhilash-portfolio.onrender.com/api/profile")
      .then((res) => res.json())
      .then(setData);
  }, []);

  if (!data) return <div className="loading">Loading...</div>;

  return (
    <div className="app">
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-logo">Abhilash</div>
        <ul className="navbar-links">
          <li><a href="#home" className="active">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="hero-card" id="home">
        <div className="hero-left">
          <h2>Hi,</h2>
          <h1>
            I'm <span className="primary">{data.name}</span>
            <br />
            <span className="job-title">{data.tagline}</span>
          </h1>
          <a href="mailto:abhilash6903@gmail.com" className="hero-contact-btn">Contact</a>
          <div className="hero-socials">
           <a href="https://www.linkedin.com/in/abhilash-mohanta-b398a1325" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
             <i className="fab fa-linkedin-in"></i>
           </a>
            <a href="https://github.com/AVXAbhilash?tab=repositories" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
             <i className="fab fa-github"></i>
           </a>
          </div>
        </div>
        <div className="hero-right">
          <div className="hero-img-bg">
            <img src="/profile.png" alt={data.name} className="profile-img" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about">
        <h2>Career Objective</h2>
        <p>{data.careerObjective}</p>
      </section>

      {/* Skills Section */}
      <section id="skills">
        <h2>Technical Skills</h2>
        <ul className="skills-list">
          {data.skills.map((skill, index) => <li key={index}>{skill}</li>)}
        </ul>
      </section>

      {/* Achievements */}
      <section>
        <h2>Achievements</h2>
        <ul>
          {data.achievements.map((ach, idx) => <li key={idx}>{ach}</li>)}
        </ul>
      </section>

      {/* Projects */}
      <section id="projects">
        <h2>Projects</h2>
        <div className="projects-grid">
          {data.projects.map((project, index) => (
            <div className="project-card" key={index}>
              <h3>{project.title}</h3>
              {project.platform && <p><strong>Platform:</strong> {project.platform}</p>}
              {project.company && <p><strong>Company:</strong> {project.company}</p>}
              <p>{project.description}</p>
              <p><strong>Tech Stack:</strong> {project.techStack.join(", ")}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section>
        <h2>Educational Qualifications</h2>
        <div className="table-responsive">
          <table>
            <thead>
              <tr>
                <th>Qualification</th>
                <th>Institution</th>
                <th>Board/University</th>
                <th>Year</th>
                <th>Score</th>
              </tr>
            </thead>
            <tbody>
              {data.education.map((edu, idx) => (
                <tr key={idx}>
                  <td>{edu.degree}</td>
                  <td>{edu.institution}</td>
                  <td>{edu.board}</td>
                  <td>{edu.year}</td>
                  <td>{edu.cgpa ? `CGPA: ${edu.cgpa}` : `Marks: ${edu.percentage}`}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Workshops */}
      <section>
        <h2>Workshops Attended</h2>
        <ul>
          {data.workshops.map((w, idx) => <li key={idx}>{w}</li>)}
        </ul>
      </section>

      {/* Strengths */}
      <section>
        <h2>Strengths</h2>
        <ul>
          {data.strengths.map((s, idx) => <li key={idx}>{s}</li>)}
        </ul>
      </section>

      {/* Hobbies */}
      <section>
        <h2>Hobbies</h2>
        <ul>
          {data.hobbies.map((h, idx) => <li key={idx}>{h}</li>)}
        </ul>
      </section>

      {/* Contact Section */}
      <section id="contact">
        <h2>Contact</h2>
        <div className="contact-grid">
          <div>
            <p><strong>Mobile:</strong> {data.phone}</p>
            <p>
              <strong>Email:</strong>{" "}
              {Array.isArray(data.email)
                ? data.email.map((e, i) => (
                    <span key={i}>
                      <a href={`mailto:${e}`}>{e}</a>
                      {i < data.email.length - 1 ? ", " : ""}
                    </span>
                  ))
                : <a href={`mailto:${data.email}`}>{data.email}</a>
              }
            </p>
            <p><strong>LinkedIn:</strong> <a href={data.linkedIn} target="_blank" rel="noopener noreferrer">{data.linkedIn}</a></p>
            <p><strong>Location:</strong> {data.location}</p>
            <a href={data.resume} download className="resume-btn">Download Resume</a>
          </div>
          <div>
            <h3>Personal Details</h3>
            <ul>
              <li><strong>Father's Name:</strong> {data.personal.father}</li>
              <li><strong>Mother's Name:</strong> {data.personal.mother}</li>
              <li><strong>Nationality:</strong> {data.personal.nationality}</li>
              <li><strong>Date of Birth:</strong> {data.personal.dob}</li>
              <li><strong>Gender:</strong> {data.personal.gender}</li>
              <li><strong>Marital Status:</strong> {data.personal.maritalStatus}</li>
              <li><strong>Languages Known:</strong> {data.personal.languages.join(", ")}</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;