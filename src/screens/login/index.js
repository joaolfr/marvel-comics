import React from "react";
import GitHubLogin from "react-github-login";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { Container, GitHubButton, GHIcon } from "./styles";
import Marvel from "../../assets/images/marvel_icon.png";
const Login = () => {
  // const onSuccess = (response) => console.log(response);
  // const onFailure = (response) => console.error(response);

  return (
    <Container>
      {/* <GitHubLogin
        clientId="69a6191348c6dd209edb"
        onSuccess={() => console.log("deu certo")}
        onFailure={onFailure}
      /> */}
      <img src={Marvel} height={300} />
      <a
        style={{ textDecoration: "none" }}
        href={`https://github.com/login/oauth/authorize?scope=user&client_id=69a6191348c6dd209edb&redirect_uri=http://localhost:3000/home`}
        // href={`https://github.com/login/oauth/authorize?scope=user&client_id=69a6191348c6dd209edb&redirect_uri=https://joaolfr.github.io/marvel-comics/`}
      >
        <GitHubButton>
          <GHIcon className="gh-icon" />
          <span className="ghLink"> Login with GitHub</span>
        </GitHubButton>
      </a>
      {/* <Link to="/home">go home</Link> */}
    </Container>
  );
};

export default Login;
