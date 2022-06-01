import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";
import { information } from "../../constants/constants";

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          {information.title}
        </SectionTitle>
        <SectionText>{information.description}</SectionText>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
