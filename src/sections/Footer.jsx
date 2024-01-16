import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import Logo from "../assets/images/ikons/star_white_48dp.svg";

const Section = styled.section`
  min-height: 100vh;
  width: 100%;
  margin: 5rem auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: relative;

  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  img {
    width: 10vw;
    height: auto;
  }

  h3 {
    font-size: ${(props) => props.theme.font_xl};
    font-family: "Kaushan Script";
  }
`;

const FooterComponent = styled(motion.footer)`
  width: 80vw;

  ul {
    list-style-type: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    margin: 2rem;
    margin-top: 4rem;
    padding: 0 1rem;
    border-top: 1px solid ${(props) => props.theme.text};
    border-bottom: 1px solid ${(props) => props.theme.text};
  }

  li {
    padding: 2rem;
    font-size: ${props => props.theme.font_l};
    text-transform: uppercase;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      transform: scale(1.1);
    }
  }
`

const Button = styled.div`
  padding: 0.5rem 0;
  margin: 0.4rem;
  font-size: ${props => props.theme.font_l};

  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    text-decoration: underline;

  }
`

const Footer = () => {
  return (
    <Section>
      <LogoContainer>
        <img data-scroll data-scroll-speed="2" src={Logo} alt="logo" />
        <h3 data-scroll data-scroll-speed="-1">Wibe Studio</h3>
      </LogoContainer>
      <FooterComponent
      initial={{y: '-400px'}}
      whileInView={{y:0}}
      viewport={{onse:false}}
      transition={{
        duration: 1.5
      }}
      >
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Shop</li>
          <li>New Arrival</li>
          <li>
            <a href="!#">look book</a>
          </li>
          <li>
            <a href="!#">reviews</a>
          </li>
        </ul>
        <Button>
          <span>&copy; {new Date().getFullYear()}. All Right Reserved</span>
          <span>Made with &hearts; by <a href="!#">Codebox</a></span>
        </Button>
      </FooterComponent>
    </Section>
  );
};

export default Footer;
