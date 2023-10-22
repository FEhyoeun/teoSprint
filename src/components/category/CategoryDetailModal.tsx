import React from 'react';
import styled from '@emotion/styled';
import Icon from '../common/Icon';

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
  cursor: pointer;
`;
const CardWrapper = styled.div`
  background-color: white;
  width: 50%;
  height: 80%;
  border-radius: 5px;
`;
const CardTopNav = styled.div``;
const CardImage = styled.div`
  width: 50%;
  height: 50%;
  border-radius: 50%;
`;
const CardName = styled.div``;

const CategoryDetailModal = () => {
  return (
    <>
      <Background>
        <Wrapper>
          <Icon name="chevron-left" size={30} />
          <CardWrapper></CardWrapper>
          <Icon name="chevron-right" size={30} />
        </Wrapper>
      </Background>
    </>
  );
};

export default CategoryDetailModal;
