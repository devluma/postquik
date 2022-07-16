import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-items: center;
  flex-direction: column;
  gap: 30px;
  padding-top: 10px;

  a {
    color: ${props => props.theme.colors.white};
  }

  img {
    margin: 0 auto;
  }

  h3 {
    font-size: 20px;
  }
`;

export const List = styled.div`
  width: 100%;
  background-color: ${props => props.theme.colors.tertiary};
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 20px;
  transition: all 300ms;

  &:hover {
    background-color: ${props => props.theme.colors.secondary};
  }
`;

export const Title = styled.p`
  font-weight: bold;
  font-size: 1.8em;
  line-height: 1.2em;
  margin-bottom: 10px;
`;

export const Subtitle = styled.span`
  font-size: 1.2em;
  color: #bfbdbd;
`;

export const Content = styled.div`
  background-color: ${props => props.theme.colors.tertiary};
  padding: 30px;
  border-radius: 10px;
  p {
    line-height: 25px;
  }
`;

export const Likes = styled.div`
  cursor: pointer;

  display: flex;
  align-items: center;
  align-self: flex-start;
  margin-left: 20px;

  span {
    margin-left: 10px;
    font-size: 16px;
  }
`;

export const Comments = styled.div`
  align-self: flex-start;
  margin-left: 10px;

  p {
    margin-bottom: 20px;

    display: flex;
    align-items: center;
  }

  span {
    font-weight: bold;
    font-size: 14px;
    margin-left: 10px;
  }

  svg {
    color: #ed4b4b;
    margin-left: 10px;
    cursor: pointer;
  }
`;

export const ContainerTextArea = styled.div`
  margin-left: 10px;
  width: 100%;
`;
