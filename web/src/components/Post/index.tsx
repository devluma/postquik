import React, { useState } from "react";

import ContentHeader from "src/components/ContentHeader";
import TextArea from "src/components/Forms/TextArea";
import Button from "src/components/Forms/Button";

import { FcLikePlaceholder, FcLike } from "react-icons/fc";
import { RiDeleteBin2Fill } from "react-icons/ri";

import * as S from "./styles";

import { ImageLogo } from "src/assets";

const Post: React.FC = () => {
  const [liked, setLiked] = useState(false);

  return (
    <>
      <ContentHeader title="Título" lineColor="#4E41F0" />
      <S.Container>
        <img src={ImageLogo} width={200} height={200} alt="Logo" />
        <S.Content>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the 1500s, when an
            unknown printer took a galley of type and scrambled it to make a type specimen
            book. It has survived not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages, and more
            recently with desktop publishing software like Aldus PageMaker including
            versions of Lorem Ipsum. Why do we use it? It is a long established fact that a
            reader will be distracted by the readable content of a page when looking at its
            layout. The point of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content here',
            making it look like readable English. Many desktop publishing packages and web
            page editors now use Lorem Ipsum as their default model text, and a search for
            'lorem ipsum' will uncover many web sites still in their infancy. Various
            versions have evolved over the years, sometimes by accident, sometimes on
            purpose (injected humour and the like)
          </p>
        </S.Content>

        <S.Likes onClick={() => setLiked(!liked)}>
          {liked ? <FcLike size={30} /> : <FcLikePlaceholder size={30} />}{" "}
          <span>22 curtida(s)</span>
        </S.Likes>

        <h3>Comentários</h3>
        <S.Comments>
          <p>
            Lorem Ipsum is simply dummy text of - <span>João</span> <RiDeleteBin2Fill />{" "}
          </p>
          <p>
            Lorem Ipsum is simply dummy text of - <span>João</span> <RiDeleteBin2Fill />
          </p>
          <p>
            Lorem Ipsum is simply dummy text of - <span>João</span> <RiDeleteBin2Fill />
          </p>
        </S.Comments>

        <S.ContainerTextArea>
          <TextArea label="Deixe seu comentário" placeholder="Digite aqui..." />
          <Button>Comentar</Button>
        </S.ContainerTextArea>
      </S.Container>
    </>
  );
};

export default Post;
