import React from "react";

import ContentHeader from "src/components/ContentHeader";
import Input from "src/components/Forms/Input";

import * as S from "./styles";

const Profile: React.FC = () => {
  const [name, setName] = React.useState("");

  return (
    <S.Container>
      <ContentHeader title="Perfil" lineColor="#4E41F0" />
      <Input
        label="Nome Completo"
        value={name}
        onChange={({ target }) => setName(target.value)}
      />
    </S.Container>
  );
};

export default Profile;
