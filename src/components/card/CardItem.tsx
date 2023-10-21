import styled from '@emotion/styled';

import { Card as CardType } from '../../types/card';

const StyledCardItem = styled.div`
  box-sizing: border-box;
  flex-basis: calc(25% - 40px); // 20px은 부모의 gap
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
`;

export const CardItem = ({ data }: { data: CardType }) => {
  const { audio, category, img, name } = data;

  return (
    <StyledCardItem>
      <img src={img} alt={name} draggable="false" />
      <div>{name}</div>
    </StyledCardItem>
  );
};
