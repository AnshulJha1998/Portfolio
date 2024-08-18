import React from "react";
import { Tooltip as ReactTooltip } from "react-tooltip";
import { useSectionInView } from "../assets/lib/hooks";
import {
  skillsDataCMS,
  skillsDataDesign,
  skillsDataWeb,
} from "../assets/lib/data";

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
            <span className="text-[--orange]">&lt;</span>Skills
            <span className="text-[--orange]">/&gt;</span>
          </p>
          <h2>My TechStack and Skills</h2>
        </div>
        <div className="flex gap-40 justify-center max-lg:flex-col">
          <div className="w-1/3 max-lg:w-full">
            <SkillSection skillsData={skillsDataWeb} />
          </div>
          <div className="flex flex-col h-[inherit]  justify-around max-lg:gap-40">
            <SkillSection skillsData={skillsDataDesign} />
            <SkillSection skillsData={skillsDataCMS} />
          </div>
        </div>
      </section>
      <ReactTooltip
        place="top"
        id="my-tooltip"
        style={{
          fontSize: "1.5rem",
          zIndex: 10,
          backgroundColor: "var(--orange)",
        }}
      />
    </React.Fragment>
  );
};

export default TechStack;
