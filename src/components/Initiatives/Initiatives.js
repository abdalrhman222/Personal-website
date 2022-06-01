import React from "react";

import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img,
} from "./InitiativesStyles";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { initiatives } from "../../constants/constants";

const Initiatives = () => (
  <Section nopadding id="projects">
    <SectionDivider />
    <SectionTitle main>Initiatives</SectionTitle>
    <GridContainer>
      {initiatives.map((p, i) => {
        return (
          <BlogCard key={i}>
            <TitleContent>
              <br />
              <HeaderThree title>{p.title}</HeaderThree>
              <Hr />
            </TitleContent>
            <CardInfo className="card-info">{p.description}</CardInfo>
            <div>
              <TitleContent>Role</TitleContent>
              <TagList>
                <Tag>{p.role}</Tag>
              </TagList>
            </div>
            <UtilityList>
              <ExternalLinks href={p.link}>View</ExternalLinks>
            </UtilityList>
          </BlogCard>
        );
      })}
    </GridContainer>
  </Section>
);

export default Initiatives;
