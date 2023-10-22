import React from 'react';
import styled from '@emotion/styled';
import Icon from '../common/Icon';
import { Card as CardType } from '../../types/card';

interface CategoryDetailModal {
  data: CardType | null;
  setShowModal: (val: boolean) => void;
}

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  width: 50%;
  height: 70%;
  border-radius: 5px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const IconStyled = styled(Icon)`
  cursor: pointer;
`;
const CardWrapper = styled.div`
  background-color: white;
  width: 50%;
  height: 80%;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const CardTopNav = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  margin: 10px;
`;
const CardImage = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background-color: gray;
  margin: 10px 0;
`;
const CardName = styled.div`
  font-size: 64px;
`;

const CategoryDetailModal = ({ data, setShowModal }: CategoryDetailModal) => {
  return (
    <Background>
      <Wrapper>
        <CardWrapper>
          <CardTopNav>
            <IconStyled name="volume-2" size={30} onClick={() => alert('준비중입니다.')} />
            <IconStyled name="x" size={30} onClick={() => setShowModal(false)} />
          </CardTopNav>
          <CardImage />
          <CardName>{data?.name}</CardName>
        </CardWrapper>
      </Wrapper>
    </Background>
  );
};

export default CategoryDetailModal;
