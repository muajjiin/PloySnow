
import TitleHeader from "../components/TitleHeader";
import TechIconCardExperience from "../components/models/TechLogos/TechIconCardExperience.jsx";
import { techStackIcons } from "../constants";

const TechStack = () => {
  return (
    <div id="skills" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="How I Can Contribute & My Key Skills"
          sub="🤝 What I Bring to the Table"
        />

        <div className="tech-grid">
          {techStackIcons.map((techStackIcon) => (
            <div
              key={techStackIcon.name}
              className="card-border tech-card overflow-hidden group xl:rounded-full rounded-lg"
            >
              {/* Background animation on hover */}
              {/* <div className="tech-card-animated-bg" /> */}

              <div className="tech-card-content">
                {/* Icon (3D model) */}
                <div className="tech-icon-wrapper">
                  <TechIconCardExperience model={techStackIcon} />
                </div>

                {/* Icon name */}
                <div className="padding-x w-full">
                  <p>{techStackIcon.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
