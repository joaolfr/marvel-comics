import styled from "styled-components";
import { FaGithub } from "react-icons/fa";

export const Container = styled.div`
  height: 100%;
  background: ${(props) => props.theme.colors.primary};
  width: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
`;

export const GitHubButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  height: 70px;
  width: 300px;
  background: #fff;
  border-radius: 15px;
  outline: none;
  border-width: 0px;
  align-items: center;
  transition: 0.2s;

  &:hover {
    opacity: 0.8;
    cursor: pointer;
    background: ${(props) => props.theme.colors.secondary};

    .ghLink {
      color: #fff;
    }
    .gh-icon {
      color: #fff;
    }
  }

  .ghLink {
    color: ${(props) => props.theme.colors.primary};
    text-decoration: none;
    font-size: 16px;
  }
`;

export const GHIcon = styled(FaGithub).attrs(() => ({
  size: 20,
}))``;
