import React, { useMemo } from "react";

import LinkButton from "@/app/components/LinkButton";
import { contactLinks } from "@/utils/links";

import "./style.css";

const Contacts: React.FC = () => {
  const contactLinksMemo = useMemo(
    () =>
      contactLinks.map((item, index) => (
        <LinkButton key={index.toString()} name={item.name} href={item.link} />
      )),
    []
  );

  return <div className="contactLinks">{contactLinksMemo}</div>;
};

export default Contacts;
