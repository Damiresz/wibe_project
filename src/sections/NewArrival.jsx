import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useLayoutEffect, useRef, useEffect } from "react";
import styled from "styled-components";


import img1 from "../assets/images/11.webp";
import img2 from "../assets/images/12.webp";
import img3 from "../assets/images/13.webp";
import img4 from "../assets/images/14.webp";

const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  margin: 0 auto;

  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
`;

const Title = styled.h1`
  font-size: ${(props) => props.theme.font_xxl};
  font-family: "Kaushan Script";
  font-weight: 300;
  color: ${(props) => props.theme.body};
  text-shadow: 1px 1px 1px ${(props) => props.theme.text};

  position: absolute;
  top: 1rem;
  left: 5%;
  z-index: 11;
`;

const Text = styled.div`
  width: 20%;
  font-size: ${(props) => props.theme.font_l};
  font-weight: 300;
  position: absolute;
  padding: 2rem;
  top: 0;
  right: 0;
  z-index: 5;
  margin-top: 20%;
`;

const Owerlay = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 30vw;
  height: 90vh;
  z-index: 11;
  box-shadow: 0 0 0 5vw ${(props) => props.theme.text};
  border: 3px solid ${(props) => props.theme.body};
  overflow: hidden;
`;

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);

  width: 25vw;
  height: auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 5rem 0;
  img {
    width: 100%;
    height: auto;
    cursor: pointer;
  }
`;

const Product = ({ img, title = "" }) => {
  return (
    <Item>
      <img width="400" height="600" src={img} alt={title} />
      <h2>{title}</h2>
    </Item>
  );
};

const NewArrival = () => {
  gsap.registerPlugin(ScrollTrigger);
  const ref = useRef(null);
  const Verticalref = useRef(null);

  useEffect(() => {
    let element = ref.current;
    let scrollingElement = Verticalref.current;

    let tl = gsap.timeline();

    setTimeout(() => {
      tl.to(element, {
        scrollTrigger: {
          trigger: element,
          start: "top top",
          end: `bottom+=100% top-=100%`,
          scroller: ".App", //locomotive-scroll
          scrub: 1,
          pin: true,
        },
        ease: "none",
      });

      tl.fromTo(scrollingElement, {
        y:'0',
      },{
        y:'-100%',
        scrollTrigger: {
          trigger: scrollingElement,
          start: "top top",
          end: `bottom top`,
          scroller: ".App", //locomotive-scroll
          scrub: 1,
        },
      });
      ScrollTrigger.refresh();
    }, 1000);
    ScrollTrigger.refresh();

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <Section ref={ref}>
      <Owerlay />
      <Title
        data-scroll
        data-scroll-speed="-1"
        data-scroll-direction="horizontal"
      >
        New Arrival
      </Title>

      <Container ref={Verticalref}>
        <Product img={img3} title="Sweatshirts" />
        <Product img={img4} title="Ethnic Wear" />
        <Product img={img1} title="Man Basics" />
        <Product img={img2} title="Tops" />
      </Container>

      <Text data-scroll data-scroll-speed="-4">
        There is new collection available for cool clothes in all sizes. This
        collection is a great way to find a new look for you. It offers a
        variety of cool apparel styles to fit your taste, while you can also
        find some cool clothes that you can wear everyday.
        <br />
        <br />
        The first line of clothing you will see on this collection is for men.
        The collection also includes three new styles for women.
        <br />
        <br />
        Give it a try and experience a new look.
      </Text>
    </Section>
  );
};

export default NewArrival;
