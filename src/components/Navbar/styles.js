import styled, { keyframes } from "styled-components";
import { IoIosLogOut } from "react-icons/io";
import { Text } from "../UI";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity:1;
  }
`;

export const Wrapper = styled.div`
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${(props) => props.theme.colors.primary};
  padding: 0px 20px 0 20px;
  animation: ${fadeIn} 1s;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const UserInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
`;

export const Avatar = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 25px;
  margin: 0 10px;
`;

export const LogoutIcon = styled(IoIosLogOut).attrs(() => ({
  size: 30,
  color: "white",
}))`
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    transform: translate(0, -5px);
  }
`;

export const Title = styled(Text).attrs(() => ({
  type: "medium",
  color: "white",
  weight: "heavy",
}))`
  letter-spacing: 2px;
`;
export const SubTitle = styled(Text).attrs(() => ({
  type: "small",
  color: "white",
}))``;

export const MarvelIcon = styled.img`
  height: 100px;
`;
