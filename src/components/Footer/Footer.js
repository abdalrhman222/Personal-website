import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";

import { SocialIcons } from "../Header/HeaderStyles";
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from "./FooterStyles";
import { information } from "../../constants/constants";

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href={`tel:${information.phone}`}>
            {information.phone}
          </LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href={`mailto:${information.email}`}>
            {information.email}
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <SocialContainer>
          {information.github.length > 0 && (
            <SocialIcons
              href={`https://github.com/${information.github}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillGithub size="3rem" />
            </SocialIcons>
          )}
          

          {information.instagram.length > 0 && (
            <SocialIcons
              href={`https://www.instagram.com/${information.instagram}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillInstagram size="3rem" />
            </SocialIcons>
          )}
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
