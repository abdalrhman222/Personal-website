import React from "react";

import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
  SectionHeader,
} from "../../styles/GlobalComponents";
import { information } from "../../constants/constants";

const Timeline = () => {
  return (
    <Section id="about">
      <SectionTitle>About Me</SectionTitle>
      <SectionHeader>Name: {information.name}</SectionHeader>
      <SectionHeader>Age: {information.age}</SectionHeader>
      <SectionText>{information.description}</SectionText>
      <SectionDivider />
    </Section>
  );
};

export default Timeline;
