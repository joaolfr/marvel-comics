import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  background: ${(props) => props.theme.colors.primary};
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: auto;
  padding: 10px;
`;
