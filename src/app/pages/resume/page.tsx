import React, { useEffect, useMemo, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import Image from "next/image";

import TypingEffect from "@/app/components/TypingEffect";
import Contacts from "./components/Contacts";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import joaoalrc from "@/app/assets/joaoalrc.svg";
import iconDown from "@/app/assets/iconDown.svg";

import "./style.css";

const Resume: React.FC = () => {
  const { t } = useTranslation();
  const containerRef = useRef<HTMLDivElement>(null);

  const [showName, setShowName] = useState<boolean>(false);
  const [showRole, setShowRole] = useState<boolean>(false);
  const [showScrollIcon, setShowScrollIcon] = useState<boolean>(false);
  const [showPassion, setShowPassion] = useState<boolean>(false);
  const [showInfo, setShowInfo] = useState<boolean>(false);
  const [showIdea, setShowIdea] = useState<boolean>(false);

  useEffect(() => {
    setShowName(true);

    const roleTimeout = setTimeout(() => {
      setShowRole(true);
    }, 1500);

    const passionTimeout = setTimeout(() => {
      setShowPassion(true);
    }, 2500);

    const infoTimeout = setTimeout(() => {
      setShowInfo(true);
    }, 5600);

    const ideaTimeout = setTimeout(() => {
      setShowIdea(true);
    }, 11000);

    const showScrollIconTimeout = setTimeout(() => {
      setShowScrollIcon(true);
    }, 18400);

    return () => {
      clearTimeout(roleTimeout);
      clearTimeout(passionTimeout);
      clearTimeout(infoTimeout);
      clearTimeout(ideaTimeout);
      clearTimeout(showScrollIconTimeout);
    };
  }, []);

  //Hide double down icon on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (containerRef?.current?.scrollTop! > 0 && !!showScrollIcon) {
        setShowScrollIcon(false);
      }
    };

    containerRef?.current?.addEventListener("scroll", handleScroll);

    return () => {
      containerRef?.current?.removeEventListener("scroll", handleScroll);
    };
  }, [showScrollIcon]);

  const name = useMemo(
    () =>
      showName && (
        <div className="nameContainer">
          <TypingEffect
            className="name"
            text="João Victor Alarcão Pereira"
            velocity={50}
          />
        </div>
      ),
    [showName]
  );
  const role = useMemo(
    () =>
      showRole && (
        <div className="roleContainer">
          <TypingEffect
            text={t("resume.role")}
            className="role"
            velocity={50}
          />
        </div>
      ),
    [showRole, t]
  );
  const passion = useMemo(
    () =>
      showPassion && (
        <div className="infoContainer">
          <TypingEffect
            className="info"
            text={t("resume.passion")}
            velocity={30}
          />
        </div>
      ),
    [showPassion, t]
  );
  const info = useMemo(
    () =>
      showInfo && (
        <div className="infoContainer">
          <TypingEffect
            className="info"
            text={t("resume.info")}
            velocity={30}
          />
        </div>
      ),
    [showInfo, t]
  );
  const ideas = useMemo(
    () =>
      showIdea && (
        <div className="infoContainer">
          <TypingEffect
            className="info"
            text={t("resume.ideas")}
            velocity={30}
          />
        </div>
      ),
    [showIdea, t]
  );

  const scrollIcon = useMemo(
    () => (
      <Image
        height={80}
        alt="icon scroll"
        src={iconDown}
        className={`animated-icon scroll-icon ${showScrollIcon && "show"}`}
      />
    ),
    [showScrollIcon]
  );

  return (
    <div ref={containerRef} className="container">
      <section className="first-section">
        {name}
        {role}
        {passion}
        {info}
        {ideas}
        <Contacts />
        <Image alt="logo" src={joaoalrc} className="joaoalrc" />
        {scrollIcon}
      </section>
      <section className="last-section">
        <Experience />
        <Skills />
      </section>
    </div>
  );
};

export default Resume;
