import React, { useState } from 'react';
import styled from '@emotion/styled';
import { useParams } from 'react-router-dom';

import { CardItem } from '../components/card/CardItem';
import { CardPage } from '../components/card/CardPage';

import CARD_MOCK from '../assets/mock.json';

const StyledCategoryWrapper = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const Category = () => {
  const { category } = useParams();
  const [page, setPage] = useState(0); // 계산 편의성을 위해 첫 페이지를 0으로 설정

  const startIndex = page * 8;
  const endIndex = (page + 1) * 8;

  return (
    <StyledCategoryWrapper>
      <CardPage.Next />
      <CardPage.Prev />

      {CARD_MOCK.filter((c) => c.category === category)
        .slice(startIndex, endIndex)
        .map((card) => (
          <CardItem data={card} key={card.name} />
        ))}
    </StyledCategoryWrapper>
  );
};
