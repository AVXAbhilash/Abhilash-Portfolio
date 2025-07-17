
const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// ...existing code...
app.get("/api/profile", (req, res) => {
  res.json({
    name: "Abhilash Mohanta",
    tagline: "Aspiring Software Engineer | Creative Problem Solver",
    address: "Link Road, Rairangpur, Mayurbhanj, Odisha, India, 757043",
    email: [
      "abhilash6903@gmail.com",
      "abhilash2022@gift.edu.in"
    ],
    phone: "+91 7849048360",
    location: "Rairangpur,Mayurbhaj, Odisha, India",
    linkedIn: "https://www.linkedin.com/in/abhilash-mohanta-b398a1325",
    resume: "/resume.pdf",
    careerObjective: "I am passionate about becoming a software engineer and contributing to innovative projects. My goal is to leverage my technical skills and creativity to develop impactful software solutions that solve real-world problems and enhance user experiences.",
    skills: [
      "Java",
      "HTML",
      "CSS",
      "JavaScript",
      "ReactJS",
      "MySQL",
      "VS Code",
      "Canva"
    ],
    achievements: [
      "Successfully completed 12-week NPTEL courses: Data Structures and Algorithms using Java, Cloud Computing, Introduction to Industry 4.0 and Industrial IoT"
    ],
    projects: [
      {
        title: "Expense Tracker",
        platform: "Java Internship at Q Spider (2023)",
        description: "A desktop application to add, delete, and view expenses. Calculates total expenditure by month or date range. Designed with an intuitive UI and seamless database connectivity.",
        techStack: ["Java", "MySQL", "NetBeans", "JDBC"]
      },
      {
        title: "E-commerce Website",
        company: "Technoboot Pvt. Ltd. (2024)",
        description: "Online clothing store with product reviews, price comparisons, user accounts, and cart functionality. Enables saving favorites and creating user profiles.",
        techStack: ["MongoDB", "Express", "React", "Node.js"]
      }
    ],
    education: [
      {
        degree: "B.Tech (CSE)",
        institution: "GIFT Autonomous, Bhubaneswar",
        board: "BPUT",
        year: "2026",
        cgpa: "7.23"
      },
      {
        degree: "Intermediate (12th)",
        institution: "Kalinga Institute for Industrial Technology",
        board: "CHSE Board",
        year: "2022",
        percentage: "74%"
      },
      {
        degree: "Matriculation (10th)",
        institution: "Central Public School, Adityapur, Jamshedpur",
        board: "CBSE",
        year: "2020",
        percentage: "73%"
      }
    ],
    workshops: [
      "Robotics Workshop at GIFT Autonomous (2023)"
    ],
    strengths: [
      "Adaptability",
      "Team Player"
    ],
    hobbies: [
      "Music Production",
      "Badminton"
    ],
    personal: {
      father: "Mr. Gagan Bihari Mohanta",
      mother: "Mrs. Renuka Mohanta",
      nationality: "Indian",
      dob: "06/09/2003",
      gender: "Male",
      maritalStatus: "Unmarried",
      languages: ["Odia", "Hindi", "English"]
    }
  });
});
// ...existing code...

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
