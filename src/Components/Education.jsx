import "./Education.css";
import Reveal from "./Reveal";
import { FaGraduationCap, FaSchool, FaAward } from "react-icons/fa";

const Education = () => {
  const education = [
    {
      icon: <FaGraduationCap />,
      degree: "Bachelor of Computer Applications (BCA)",
      institute: "St. Andrews Institute of Technology & Management, Gurugram",
      duration: "August 2018 - August 2021",
      score: "75%",
      description:
        "Focused on Software Engineering, DBMS, Operating Systems, Data Structures and Web Technologies.",
    },

    {
      icon: <FaSchool />,
      degree: "Senior Secondary",
      institute: "Bal Bharti Public School",
      duration: "2014 - 2015",
      score: "72%",
      description:
        "Completed Higher Secondary education with emphasis on analytical and technical subjects.",
    },

    {
      icon: <FaAward />,
      degree: "Secondary Education",
      institute: "New Tehri International School",
      duration: "2012 - 2013",
      score: "84%",
      description:
        "Built a strong academic foundation and achieved excellent academic performance.",
    },
  ];

  return (
    <section className="section education-section" id="education">
      <div className="container">
        <Reveal className="sec-head">
          <span className="sec-tag">Academic Journey</span>

          <h2>
            Education &<span> Learning Path</span>
          </h2>
        </Reveal>

        <div className="education-timeline">
          {education.map((item, index) => (
            <Reveal className="education-card glow" delay={index * 140} key={item.degree}>
              <div className="education-icon">{item.icon}</div>

              <div className="education-content">
                <div className="education-top">
                  <span className="education-year">{item.duration}</span>
                  <span className="education-score">{item.score}</span>
                </div>

                <h3>{item.degree}</h3>

                <h4>{item.institute}</h4>

                <p>{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
