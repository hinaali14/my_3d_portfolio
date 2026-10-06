import "./styles/Career.css";
import { config } from "../config";

type Experience = {
  position: string;
  company: string;
  period: string;
  description: string;
};

const getDisplayYear = (period: string) => {
  if (period.includes("Present")) return "NOW";

  if (period.includes(" - ")) {
    return period.split(" - ")[0];
  }

  return period;
};

const Career = () => {
  const experiences = config.experiences as Experience[];

  // Hena currently has no professional work experience.
  if (experiences.length === 0) {
    return null;
  }

  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>

        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>

          {experiences.map((exp, index) => (
            <div key={index} className="career-info-box">
              <div className="career-info-in">
                <div className="career-role">
                  <h4>{exp.position}</h4>
                  <h5>{exp.company}</h5>
                </div>

                <h3>{getDisplayYear(exp.period)}</h3>
              </div>

              <p>{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Career;