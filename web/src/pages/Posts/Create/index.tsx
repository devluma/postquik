import React from "react";

import ContentHeader from "src/components/ContentHeader";
import TextArea from "src/components/Forms/TextArea";
import Button from "src/components/Forms/Button";

import * as S from "./styles";

const CreatePost: React.FC = () => (
  <S.Container>
    <ContentHeader title="Create New Post" lineColor="#4E41F0" />

    <TextArea label="Mensagem" placeholder="Sua mensagem..." />
    <Button>Enviar</Button>
  </S.Container>
);

export default CreatePost;
