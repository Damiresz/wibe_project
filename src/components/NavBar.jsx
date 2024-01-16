import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const NavContainer = styled(motion.div)`
  width: 100vw;
  position: absolute;
  top: ${(props) => (props.$click ? "0" : `-${props.theme.navHeight}`)};
  z-index: 6;
  display: flex;
  justify-content: center;
  align-items: center;

  transition: all 0.3s ease-in;

  @media (max-width: 40rem) {
    top: ${(props) => (props.$click ? "0" : `calc(-50vh - 4rem)`)};
  }
`;

const MenuItems = styled(motion.ul)`
  position: relative;
  background-color: ${(props) => props.theme.body};
  list-style-type: none;
  height: ${(props) => props.theme.navHeight};
  color: ${(props) => props.theme.text};
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  padding: 0 10rem;
  @media (max-width: 40rem) {
    flex-direction: column;
    padding: 2rem 0;
    height: 50vh;
  }
`;

const MenuItem = styled(motion.li)`
  text-transform: uppercase;
  color: ${(props) => props.theme.text};
  @media (max-width: 40rem) {
    flex-direction: column;
    padding: 0.5 0;
  }
`;

const MenuBtn = styled.li`
  background-color: ${(props) => `rgba(${props.theme.textRGBA},0.7)`};
  color: ${(props) => props.theme.body};
  width: 15rem;
  height: 2.5rem;

  display: flex;
  justify-content: center;
  align-items: center;

  clip-path: polygon(0 0, 100% 0, 80% 100%, 20% 100%);

  font-weight: 600;
  text-transform: uppercase;
  cursor: pointer;

  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
`;

const AnimateNavContainer = {
  hidden: {
    y: "-100%",
  },
  visible: {
    y: 0,
    transition: {
      duration: 2,
      delay: 2,
    },
  },
};

const NavBar = () => {
  const [click, setClick] = useState(false);

  return (
    <NavContainer
      $click={click}
      variants={AnimateNavContainer}
      initial="hidden"
      animate="visible"
    >
      <MenuItems
        drag="y"
        dragConstraints={{
          top: 0,
          bottom: 70,
        }}
        dragElastic={0.05}
        dragSnapToOrigin
      >
        <MenuBtn onClick={() => setClick(!click)}>Menu</MenuBtn>
        <MenuItem
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.9, y: 0 }}
        >
          Home
        </MenuItem>
        <MenuItem
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.9, y: 0 }}
        >
          About
        </MenuItem>
        <MenuItem
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.9, y: 0 }}
        >
          Shop
        </MenuItem>
        <MenuItem
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.9, y: 0 }}
        >
          New arrival
        </MenuItem>
      </MenuItems>
    </NavContainer>
  );
};

export default NavBar;
