import React from "react";

import * as S from "./styles";

interface InputProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
}

const TextArea: React.FC<InputProps> = ({ label, ...rest }) => (
  <S.Label>
    {label}
    <S.TextArea {...rest} />
  </S.Label>
);

export default TextArea;
