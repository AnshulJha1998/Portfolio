import React from "react";
import { Tooltip as ReactTooltip } from "react-tooltip";
import { useSectionInView } from "../assets/lib/hooks";
import { skillsDataWeb } from "../assets/lib/data";

import SkillSection from "./SkillSection";

const TechStack: React.FC = () => {
  const { ref } = useSectionInView("Skills");

  return (
    <React.Fragment>
      <section
        className="relative tech-stack max-lg:p-16 "
        id="skills"
        ref={ref}
      >
        <div className="title-container flex flex-col justify-center items-center p-32 w-1/2   gap-6 min-[1921px]:px-[55rem] max-lg:p-0  max-lg:w-full max-lg:items-start max-lg:py-16 ">
          <p className="font-black mb-6">
            <span className="text-[--purple]">&lt;</span>Skills
            <span className="text-[--purple]">/&gt;</span>
          </p>
          <h2>My TechStack and Skills</h2>
        </div>
        <div className="flex gap-40 justify-center max-lg:flex-col">
          <div className="w-[77.33333%] max-lg:w-full gap-12 flex flex-col">
            {skillsDataWeb.map((skillData, index) => {
              return (
                <div key={`${skillData.skillsTitle}-${index}`}>
                  <SkillSection skillsData={skillData} />
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <ReactTooltip
        place="top"
        id="my-tooltip"
        style={{
          fontSize: "1.5rem",
          zIndex: 10,
          backgroundColor: "var(--purple)",
        }}
      />
    </React.Fragment>
  );
};

export default TechStack;
