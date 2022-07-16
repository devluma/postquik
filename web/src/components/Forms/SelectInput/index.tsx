import React from "react";

import * as S from "./styles";

type SelectInputProps = {
  options: {
    value: string | number;
    label: string | number;
  }[];
  onChange: React.ChangeEventHandler<HTMLSelectElement> | undefined;
  value?: string | number;
};
const SelectInput: React.FC<SelectInputProps> = ({ options, onChange, value }) => (
  <S.Container>
    <select onChange={onChange} defaultValue={value}>
      {options &&
        options.map(({ value, label }, index) => (
          <option key={index} value={value}>
            {label}
          </option>
        ))}
    </select>
  </S.Container>
);

export default SelectInput;
