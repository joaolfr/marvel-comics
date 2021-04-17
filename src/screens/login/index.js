import React from "react";
import { Container, GitHubButton, GHIcon } from "./styles";
import Marvel from "../../assets/images/marvel_icon.png";
import { authWithGitHub } from "../../services/hooks/useAuth";
import { useSelector, useDispatch } from "react-redux";
import { logIn, logged, setUserEmail } from "../../redux/user/userSlice";

const Login = () => {
  const comic = useSelector(logged);
  const dispatch = useDispatch();

  const handleAuth = async () => {
    const result = await authWithGitHub();
    console.log(result.credential.accessToken, result.user.email);
    localStorage.setItem("accessToken", result.credential.token);
    localStorage.setItem("userEmail", result.user.email);
    dispatch(logIn());
    dispatch(setUserEmail(result.user.email));
  };

  return (
    <Container>
      <img src={Marvel} height={300} />
      {/* <a
        style={{ textDecoration: "none" }}
        href={`https://github.com/login/oauth/authorize?scope=user&client_id=69a6191348c6dd209edb&redirect_uri=http://localhost:3000/home`}
        // href={`https://github.com/login/oauth/authorize?scope=user&client_id=69a6191348c6dd209edb&redirect_uri=https://joaolfr.github.io/marvel-comics/`}
      > */}
      <GitHubButton onClick={() => handleAuth()}>
        <GHIcon className="gh-icon" />
        <span className="ghLink"> Login with GitHub</span>
      </GitHubButton>
      {/* </a> */}
    </Container>
  );
};

export default Login;
