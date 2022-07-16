import styled from "styled-components";
import WrongSwitch, { ReactSwitchProps } from "react-switch";
const Switch = WrongSwitch as any;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  > span {
    color: ${props => props.theme.colors.white};
  }
`;
export const ToogleSelector = styled(Switch).attrs<ReactSwitchProps>(props => ({
  onColor: props.theme.colors.info,
  offColor: props.theme.colors.warning,
}))<ReactSwitchProps>`
  margin: 0 7px;
`;
