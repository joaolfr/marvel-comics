import React from "react";
import { Container, GitHubButton, GHIcon, LogoWrapper, Comic } from "./styles";
import Marvel from "../../assets/images/marvel_icon.png";
import useLogin from "./hooks";
import BG from "../../assets/images/universo-marvel.jpg";

const Login = () => {
  const { handleAuth } = useLogin();

  return (
    <Container>
      <LogoWrapper>
        <img src={Marvel} height={300} />
        <Comic>COMICS</Comic>
      </LogoWrapper>

      <GitHubButton onClick={() => handleAuth()}>
        <GHIcon className="gh-icon" />
        <span className="ghLink"> Login with GitHub</span>
      </GitHubButton>
    </Container>
  );
};

export default Login;
