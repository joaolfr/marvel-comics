import styled from "styled-components";
import { Text } from "../../UI";

export const Wrapper = styled.button`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-end;
  border: 0px;
  border-radius: 10px;
  background: transparent;
  border: 5px solid transparent;
  transition: 0.5s;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  &:hover {
    cursor: pointer;
    box-shadow: 0 3px 20px rgba(0, 0, 0, 0.7);
  }
`;

export const Title = styled(Text).attrs((props) => ({
  type: "max",
  weight: "medium",
  color: props.theme.colors.secondary,
}))`
  text-decoration: none;
  width: 200px;
  text-align: left;
  margin-left: 10px;
`;
