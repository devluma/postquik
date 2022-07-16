import React from "react";

import * as S from "./styles";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const Input: React.FC<InputProps> = ({ label, ...rest }) => (
  <S.Label>
    {label}
    <S.Input {...rest} />
  </S.Label>
);

export default Input;
