import React, { useMemo } from "react";
import Image from "next/image";

import { skills } from "@/utils/links";

import "./style.css";

const Skills: React.FC = () => {
  const mainSkills = useMemo(
    () =>
      skills
        .filter((item) => item.mainSkills)
        .map((item, index) => (
          <a key={index.toString()} href={item.link} target="_blank">
            <Image
              src={item.src}
              height={item.size}
              className={item.className}
              alt={item.alt}
            />
          </a>
        )),
    []
  );

  const secondarySkills = useMemo(
    () =>
      skills
        .filter((item) => !item.mainSkills)
        .map((item, index) => (
          <a key={index.toString()} href={item.link} target="_blank">
            <Image
              src={item.src}
              height={item.size}
              width={item.size}
              className={item.className}
              alt={item.alt}
            />
          </a>
        )),
    []
  );

  return (
    <div className="skillsContainer">
      <div className="skillsView">{mainSkills}</div>
      <div className="skillsView">{secondarySkills}</div>
    </div>
  );
};

export default Skills;
