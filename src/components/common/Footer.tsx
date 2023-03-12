import React from "react";
import { Section } from "../Layout";

type Props = {};

function Footer({}: Props) {
  return (
    <div className="bg-dark py-4">
      <Section>
        <div className="text-white">Footer</div>
      </Section>
    </div>
  );
}

export default Footer;
