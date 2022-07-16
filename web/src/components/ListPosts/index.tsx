import React from "react";
import { Link } from "react-router-dom";

import { MdAdd } from "react-icons/md";

import ContentHeader from "src/components/ContentHeader";

import * as S from "./styles";

const ListPosts: React.FC = () => (
  <>
    <ContentHeader title="Posts" lineColor="#4E41F0" />
    <S.Header>
      <Link to="/post/new">
        <MdAdd size={30} />
      </Link>
    </S.Header>
    <S.Container>
      <Link to="/posts/1">
        <S.List>
          <S.Title>TÍTULO</S.Title>
          <S.Subtitle>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </S.Subtitle>
        </S.List>
      </Link>

      <Link to="/posts/2">
        <S.List>
          <S.Title>TÍTULO</S.Title>
          <S.Subtitle>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </S.Subtitle>
        </S.List>
      </Link>
    </S.Container>
  </>
);

export default ListPosts;
