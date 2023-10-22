import React from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

const StyledPageButton = styled.button<{ isNext: boolean }>`
  ${(props) =>
    props.isNext
      ? css`
          left: 0;
        `
      : css`
          right: 0;
        `};
  position: absolute;
  top: 50%;

  background-color: white;
  padding: 0;
  border: 0;
`;

const Next = () => {
  return <StyledPageButton isNext>{'<'}</StyledPageButton>;
};
const Prev = () => {
  return <StyledPageButton isNext={false}>{'>'}</StyledPageButton>;
};

export const CardPage = { Next, Prev };
