import React from 'react';
import styled from '@emotion/styled';
import Icon from '../common/Icon';

const IconStyled = styled(Icon)<{ isNext: boolean }>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: ${({ isNext }) => isNext && 0};
  right: ${({ isNext }) => !isNext && 0};
  cursor: pointer;
`;

const Next = ({ onClick }: { onClick: () => void }) => {
  return <IconStyled name="chevron-left" isNext size={96} color="white" onClick={onClick} />;
};
const Prev = ({ onClick }: { onClick: () => void }) => {
  return (
    <IconStyled name="chevron-right" isNext={false} size={96} color="white" onClick={onClick} />
  );
};

export const CardPage = { Next, Prev };
