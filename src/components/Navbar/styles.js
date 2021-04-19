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

export const LogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;
export const Comic = styled.span`
  color: yellow;
  position: absolute;
  top: 60px;
  transform: rotate(-25deg);
  right: -10px;
  font-family: "Zen Dots";
  font-size: 10px;
  font-weight: 700;
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

const dropDown = keyframes`
  from {
    height: 0;
  }

  to {
    height:50px;
  }
`;
const dropUp = keyframes`
  from {
    height: 50px;
    display:block;
  }

  to {
    height:0;
    display:none;
  }
`;

export const AvatarWrapper = styled.div`
  position: relative;
  display: inline-block;

  .drop {
    position: absolute;
    background-color: white;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.5);
    padding: 12px 16px;
    z-index: 1;
    right: 10px;
    transition: 1s;
    display: none;
  }

  &:hover {
    .drop {
      animation: ${dropDown} 1s;
      height: 50px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }

    .drop:hover {
      background: red;
      cursor: pointer;
      color: white;
      font-weight: 700;
    }
  }
  &:not(:hover) {
    .drop {
      animation: ${dropUp} 1s;
      height: 0;
    }
  }
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
