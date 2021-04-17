import styled from "styled-components";

export const Wrapper = styled.button`
  height: 350px;
  width: 200px;
  background: white;
  display: flex;
  flex-direction: column;

  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }
`;
