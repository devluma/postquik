import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.colors.primary};
`;

export const TopContext = styled.div`
  position: absolute;
  top: 10px;
  right: 0px;
  padding: 30px;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  h2 {
    color: ${props => props.theme.colors.white};
    margin-left: 7px;
  }

  svg {
    color: ${props => props.theme.colors.white};
  }
`;

export const Form = styled.form`
  width: 300px;
  height: 300px;

  padding: 30px;
  border-radius: 10px;

  background-color: ${props => props.theme.colors.tertiary};
`;

export const FormTitle = styled.h1`
  color: ${props => props.theme.colors.white};
  margin-bottom: 40px;
  &::after {
    content: "";
    display: block;
    width: 100px;
    margin-left: 0;
    border-bottom: 10px solid ${props => props.theme.colors.blue};
  }
`;
