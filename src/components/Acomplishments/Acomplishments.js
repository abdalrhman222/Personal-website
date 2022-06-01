import React from "react";

import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { Box, Boxes, BoxNum, BoxText } from "./AcomplishmentsStyles";
import { information } from "../../constants/constants";

const achievements = [
  {
    value: "5+",
    title: "Open Source Projects",
  },
  {
    value: "2024",
    title: "UWCD'24 student",
  },
  {
    value: "97",
    title: "DELF A1",
  },
  {
    value: "93",
    title: "DELF A2",
  },
  
  {
    value: "-",
    title: "SAT",
  },
  {
    value: "1540",
    title: "SAT Practice",
  },
  
  {
    value: "#1",
    title: "Football competition",
  },
  {
    value: "#3",
    title: "Volleyball competition",
  },
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Personal Achievements</SectionTitle>
    <Boxes>
      {achievements.map((card, index) => (
        <Box key={index}>
          <BoxNum>{`${card.value}`}</BoxNum>
          <BoxText>{card.title}</BoxText>
        </Box>
      ))}
    </Boxes>
    <SectionDivider />
  </Section>
);

export default Acomplishments;
