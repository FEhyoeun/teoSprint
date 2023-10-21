import React from 'react';
import styled from '@emotion/styled';

import { CardItem } from '../components/card/CardItem';

import CARD_MOCK from '../components/card/mock.json';

const StyledCategoryContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
`;

export const Category = () => {
  return (
    <StyledCategoryContainer>
      {CARD_MOCK.map((card) => (
        <CardItem data={card} />
      ))}
    </StyledCategoryContainer>
  );
};
