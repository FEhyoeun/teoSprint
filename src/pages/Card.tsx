import styled from '@emotion/styled';

import { CardItem } from '../components/card/CardItem';

import CARD_MOCK from '../components/card/mock.json';

const StyledCardContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
`;

export const Card = () => {
  return (
    <StyledCardContainer>
      {CARD_MOCK.map((card) => (
        <CardItem data={card} />
      ))}
    </StyledCardContainer>
  );
};
