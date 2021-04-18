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
} from "./styles";
import Marvel from "../../assets/images/marvel_icon.png";

const Navbar = () => {
  const dispatch = useDispatch();
  return (
    <Wrapper>
      <MarvelIcon src={Marvel} />
      <Container>
        <UserInfoWrapper>
          <Title>{localStorage.getItem("userName")}</Title>
          <SubTitle>{localStorage.getItem("userEmail")}</SubTitle>
        </UserInfoWrapper>
        <Avatar src={localStorage.getItem("userAvatar")} />
        <LogoutIcon
          title="Logout"
          onClick={() => (
            dispatch(logOut()), localStorage.removeItem("accessToken")
          )}
        />
      </Container>
    </Wrapper>
  );
};

export default Navbar;
