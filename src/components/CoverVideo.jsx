import React from "react";
import styled from "styled-components";
import "../fonts/fonts.css";
import MainVideo from "../assets/video/Walking Girl.mp4";
import { motion } from "framer-motion";

const VideoContainer = styled.section`
  width: 100%;
  height: 100vh;
  position: relative;

  video {
    width: 100%;
    height: 100vh;
    object-fit: cover;

    @media (max-width: 40em) {
      object-position: center 10%;
    }
  }

  @media (max-width: 30em) {
      object-position: center 50%;
    }
`;
const DarkOwerlay = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 1;

  background-color: ${(props) => `rgba(${props.theme.bodyRGBA},0.6)`};
`;
const Title = styled(motion.div)`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 5;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.text};

  h1 {
    font-family: "Kaushan Script", cursive;
    font-size: ${(props) => props.theme.font_xxxl};
    text-shadow: 1px 1px 1px ${(props) => props.theme.body};
    @media (max-width: 30em) {
      font-size: ${(props) => props.theme.font_xxl};
    }
  }
  h2 {
    font-family: "SirinStencil", sans-serif;
    font-size: ${(props) => props.theme.font_l};
    text-shadow: 1px 1px 1px ${(props) => props.theme.body};

    @media (max-width: 30em) {
      font-size: ${(props) => props.theme.font_l};
      margin-top: -1.5rem;
    }
  }
  div {
    display: flex;
    flex-direction: row;
  }
`;


const container = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,

    transition: {
      DelayChildren: 2,
      staggerChildren: 0.3,
    },
  },
};


const item = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
  },
};

const CoverVideo = () => {
  return (
    <VideoContainer>
      <DarkOwerlay>
        <Title variants={container} initial="hidden" animate="show">
          <div>
            <motion.h1
              variants={item}
              data-scroll
              data-scroll-delay="0.13"
              data-scroll-speed="4"
            >
              W
            </motion.h1>
            <motion.h1
              variants={item}
              data-scroll
              data-scroll-delay="0.09"
              data-scroll-speed="4"
            >
              i
            </motion.h1>
            <motion.h1
              variants={item}
              data-scroll
              data-scroll-delay="0.06"
              data-scroll-speed="4"
            >
              b
            </motion.h1>
            <motion.h1
              variants={item}
              data-scroll
              data-scroll-delay="0.04"
              data-scroll-speed="4"
            >
              e
            </motion.h1>
          </div>
          <motion.h2
            variants={item}
            data-scroll
            data-scroll-delay="0.4"
            data-scroll-speed="2"
          >
            Inspire. Create. Belive
          </motion.h2>
        </Title>
      </DarkOwerlay>
      <video src={MainVideo} type="video/mp4" autoPlay muted loop />
    </VideoContainer>
  );
};

export default CoverVideo;
