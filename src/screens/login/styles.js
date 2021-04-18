import { FaGithub } from "react-icons/fa";
import styled, { keyframes } from "styled-components";
import BG from "../../assets/images/marvel_bg.jpg";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity:1;
  }
`;

export const Container = styled.div`
  height: 100%;
  background: ${(props) => props.theme.colors.primary};
  width: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  animation: ${fadeIn} 1s;
  background-image: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0.5) 0%,
      rgba(166, 166, 166, 0.8) 50%,
      rgba(237, 232, 232, 0.5) 98%
    ),
    url(${BG});

  background-repeat: no-repeat;
  background-size: cover;
`;

export const LogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const Comic = styled.span`
  color: yellow;
  position: absolute;
  top: 180px;
  transform: rotate(-25deg);
  right: -50px;
  font-family: "Zen Dots";
  font-size: 30px;
  font-weight: 700;
`;
export const GitHubButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  height: 70px;
  width: 300px;
  background: #fff;
  border-radius: 10px;
  outline: none;
  border-width: 0px;
  align-items: center;
  transition: 0.2s;

  &:hover {
    cursor: pointer;
    background: ${(props) => props.theme.colors.secondary_dark};

    .ghLink {
      color: #000;
    }
    .gh-icon {
      color: #000;
    }
  }

  .ghLink {
    color: ${(props) => props.theme.colors.primary_dark};

    text-decoration: none;
    font-size: 16px;
  }
`;

export const GHIcon = styled(FaGithub).attrs(() => ({
  size: 30,
}))``;
