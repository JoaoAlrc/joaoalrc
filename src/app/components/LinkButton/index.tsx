import React from "react";

import { LinkButton } from "@/app/types/components/LinkButton";

import "./style.css";

const LinkButton: React.FC<LinkButton> = ({ href, name }) => (
  <a className="button" href={href} target="_blank">
    <span className="border"></span>
    <span className="label">{name}</span>
    <span className="label-hover">
      <span className="inner">{name}</span>
    </span>
  </a>
);

export default LinkButton;
