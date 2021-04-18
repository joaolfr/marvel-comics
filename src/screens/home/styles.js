import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity:1;
  }
`;

export const Container = styled.div`
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

export const LoadSpan = styled.span`
  color: #ed1d24;
  margin-right: 10px;
`;
