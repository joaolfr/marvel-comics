import React from "react";
import { logOut } from "../../redux/user/userSlice";
import { useDispatch } from "react-redux";
import {
  Wrapper,
  UserInfoWrapper,
  Avatar,
  LogoutIcon,
  Title,
  SubTitle,
  MarvelIcon,
  Container,
  Comic,
  LogoWrapper,
  AvatarWrapper,
} from "./styles";
import Marvel from "../../assets/images/marvel_icon.png";

const Navbar = () => {
  const dispatch = useDispatch();
  return (
    <Wrapper>
      <LogoWrapper>
        <MarvelIcon src={Marvel} />
        <Comic>comics</Comic>
      </LogoWrapper>
      <Container>
        <UserInfoWrapper>
          <Title>{localStorage.getItem("userName")}</Title>
          <SubTitle>{localStorage.getItem("userEmail")}</SubTitle>
        </UserInfoWrapper>
        <AvatarWrapper>
          <Avatar src={localStorage.getItem("userAvatar")} />
          <div
            className="drop"
            onClick={() => (
              dispatch(logOut()), localStorage.removeItem("accessToken")
            )}
          >
            <span>Sair</span>
            <LogoutIcon title="Logout" className="logoutIcon" />
          </div>
        </AvatarWrapper>
      </Container>
    </Wrapper>
  );
};

export default Navbar;
