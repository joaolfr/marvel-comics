import styled, { keyframes } from "styled-components";
import { Text } from "../../components/UI";
import { AiFillCaretLeft } from "react-icons/ai";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity:1;
  }
`;
export const Wrapper = styled.div`
  background: ${(props) => props.theme.colors.white};
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: auto;
  padding: 20px 10px;
  padding-bottom: 100px;
  animation: ${fadeIn} 1s;
`;

export const ReturnWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding-bottom: 20px;

  a {
    text-decoration: none;
  }
`;
export const ImageWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  height: 100%;
  img {
    height: 100%;
    width: 350px;
  }
`;
export const InfoWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 400px;
`;

export const Title = styled(Text).attrs(() => ({
  type: "big",
  weight: "heavy",
  color: "#000",
}))`
  text-transform: uppercase;
`;

export const SubTitle = styled(Text).attrs(() => ({
  type: "medium",
  weight: "medium",
  color: "#000",
}))``;
export const SmallTitle = styled(Text).attrs(() => ({
  type: "tiny",
  weight: "medium",
  color: "#000",
}))``;

export const ReturnIcon = styled(AiFillCaretLeft).attrs(() => ({
  color: "#000",
}))``;
