import React from "react";
import styled from "styled-components";

import img1 from '../assets/images/1.webp'
import img2 from '../assets/images/2.webp'
import img3 from '../assets/images/3.webp'

const Section = styled.section`
  position: relative;
  min-height: 100vh;
  display: flex;

  width: 80vw;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: ${(props) => props.theme.font_xxxl};
  font-family: "Kaushan Script";
  font-weight: 300;

  position: absolute;
  top: 1rem;
  left: 5%;
  z-index: 5;
`;

const Left = styled.div`
  width: 50%;
  font-size: ${(props) => props.theme.font_l};
  font-weight: 300;
  position: relative;
  z-index: 5;
  margin-top: 20%;
`;
const Right = styled.div`
  width: 50%;
  position: relative;

  img {
    width: 100%;
    height: auto;
  }

  .small-image-1{
    width: 40%;
    position: absolute;
    right: 95%;
    bottom: 10%;
  }
  .small-image-2{
    width: 40%;
    position: absolute;
    left: 80%;
    bottom: 30%;
  }
`;

const About = () => {
  return (
    <Section id="fixed-target">
      <Title
        data-scroll
        data-scroll-speed="-2"
        data-scroll-direction="horizontal"
      >
        About Us
      </Title>
      <Left
        data-scroll
        data-scroll-sticky
        data-scroll-target='#fixed-target'
      >
        We're fashion studio based in california. We create unique designs that
        will blow your mind. We also design unique jewellary pieces. Fashion is
        an ART that can not be grasped by everyone.
        <br />
        <br />
        We are very dedicated to making our products. We offer unique and
        creative products to a wide range of people. We have a variety of
        styles, but for most people, all of the options are in the box. We
        specialize in making things that make you happy.
        <br />
        <br />
        We strive to build on our vision. As a fashion label, we do our best to
        create amazing experiences for all people. We are always looking to make
        something that is easy for everyone.
      </Left>
      <Right>
        <img src={img1} alt="image"/>
        <img data-scroll data-scroll-speed='4' src={img2} className="small-image-1" alt="image"/>
        <img data-scroll data-scroll-speed='-1' src={img3} className="small-image-2" alt="image"/>
      </Right>
    </Section>);
};
export default About;
