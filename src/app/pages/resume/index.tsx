import React, { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";

import joaoalrc from "../../assets/joaoalrc.svg";

import "./style.css";

interface TypingEffectProps {
  text: string;
  className: string;
  velocity: number;
}

const TypingEffect: React.FC<TypingEffectProps> = ({
  text,
  className,
  velocity,
}) => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const typingTimeout = setTimeout(() => {
        setCurrentText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, velocity);

      return () => {
        clearTimeout(typingTimeout);
      };
    }
  }, [text, currentIndex, velocity]);

  return <span className={className}>{currentText}</span>;
};

const Resume: React.FC = () => {
  const { t } = useTranslation();

  const [showName, setShowName] = useState<boolean>(false);
  const [showRole, setShowRole] = useState<boolean>(false);
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
    // }, 4400);

    const infoTimeout = setTimeout(() => {
      setShowInfo(true);
    }, 5600);

    const ideaTimeout = setTimeout(() => {
      setShowIdea(true);
    }, 8000);

    return () => {
      clearTimeout(roleTimeout);
      clearTimeout(passionTimeout);
      clearTimeout(infoTimeout);
      clearTimeout(ideaTimeout);
    };
  }, []);

  const [showTexts, setShowTexts] = useState<number[]>([]);
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
        <div>
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
        <div>
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
        <div>
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
        <div>
          <TypingEffect
            className="info"
            text={t("resume.ideas")}
            velocity={30}
          />
        </div>
      ),
    [showIdea, t]
  );

  return (
    <div className="container">
      <section className="first-section">
        {name}
        {role}
        {passion}
        {info}
        {ideas}
        <a
          className="button"
          href="https://www.linkedin.com/in/joaoalrc/"
          target="_blank"
        >
          <span className="border"></span>
          <span className="label">Linkedin</span>
          <span className="label-hover">
            <span className="inner">Linkedin</span>
          </span>
        </a>
        <a
          className="button"
          href="https://github.com/JoaoAlrc/"
          target="_blank"
        >
          <span className="border"></span>
          <span className="label">GitHub</span>
          <span className="label-hover">
            <span className="inner">GitHub</span>
          </span>
        </a>
        <a
          className="button"
          href="https://www.linkedin.com/in/joaoalrc/"
          target="_blank"
        >
          <span className="border"></span>
          <span className="label">Instagram</span>
          <span className="label-hover">
            <span className="inner">Instagram</span>
          </span>
        </a>
        <a
          className="button"
          href="mailto:code@joaoalrc.dev?cc=jv.alarcao@gmail.com&subject=Let's%20turn%20my%20dreams%20into%20codes!"
          target="_blank"
        >
          <span className="border"></span>
          <span className="label">Mail</span>
          <span className="label-hover">
            <span className="inner">Mail</span>
          </span>
        </a>
      </section>
    </div>
  );
};

export default Resume;
