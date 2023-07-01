import React, { useMemo } from "react";
import { useTranslation } from "react-i18next";

import { experiences } from "@/utils/lists";

import "./style.css";

const Experience: React.FC = () => {
  const { t } = useTranslation();

  const experiencesMemo = useMemo(
    () =>
      experiences.map((item, index) => {
        const endDate = item.endDateT ? t(item.endDateT) : item.endDate;
        return (
          <div className="experience" key={index.toString()}>
            <div className="yearView">
              <span className="year">{item.startDate}</span>
            </div>
            <span className="separator">{">"}</span>
            <div className="yearView">
              <span className="year">{endDate}</span>
            </div>
            <span className="experienceRole">{t(item.role)}</span>
          </div>
        );
      }),
    [t]
  );

  return (
    <div className="experiences">
      <h1 className="titleExperiences">{t("experiences.experience")}</h1>
      {experiencesMemo}
    </div>
  );
};

export default Experience;
