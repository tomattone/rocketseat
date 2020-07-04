import styled from "styled-components";

export const Container = styled.div`
  background: ${props => props.theme.colors.primary};
  height: 60px;
  color: ${props => props.theme.colors.text};
  display: flex;
  align-items: center;
  padding: 0 30px;
  display: flex;
  justify-content: space-between;
`;
