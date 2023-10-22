import React, { MouseEventHandler } from 'react';
import styled from '@emotion/styled';

import { Card as CardType } from '../../types/card';

interface CardItem {
  data: CardType;
  setSelectData: (val: CardType) => void;
  setShowModal: (val: boolean) => void;
}

const StyledCardItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  box-sizing: border-box;
  width: 150px;
  height: 180px;

  background-color: white;
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  align-items: center;
  cursor: pointer;
`;

const StyledCardImg = styled.img`
  border-radius: 100%;
  width: 100px;
  height: 100px;
  text-align: center;
  background-color: gray;
`;

const StyledCardName = styled.div`
  font-weight: bold;
  font-size: 30px;
`;

export const CardItem = ({ data, setShowModal, setSelectData }: CardItem) => {
  const { audio, category, img, name } = data;

  const handleClick = () => {
    setShowModal(true);
    setSelectData(data);
  };

  return (
    <StyledCardItem onClick={handleClick}>
      <StyledCardImg src={img} alt={name} draggable="false" />
      <StyledCardName>{name}</StyledCardName>
    </StyledCardItem>
  );
};
