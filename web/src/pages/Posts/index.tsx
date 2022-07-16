import React from "react";
import { useParams } from "react-router-dom";

import ContentHeader from "src/components/ContentHeader";
import ListPosts from "src/components/ListPosts";
import Post from "src/components/Post";

import * as S from "./styles";

type IdParams = {
  id: string;
};

const Posts: React.FC = () => {
  const { id } = useParams<IdParams>();

  return <S.Container>{!id ? <ListPosts /> : <Post />}</S.Container>;
};

export default Posts;
