import React from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import {
  Dialog,
  DialogContent,
  DialogOverlay,
  DialogPortal,
  DialogTrigger,
} from '@radix-ui/react-dialog';

import { useRootRef } from '../../pages/Root';

import { Card as CardType } from '../../types/card';

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
`;

const StyledCardImg = styled.img`
  border-radius: 100%;
  width: 100px;
  height: 100px;
  text-align: center;
  background-color: gray;
`;

// TODO: Dialog 컴포넌트 추출

const StyledDialogTrigger = styled(DialogTrigger)`
  background-color: transparent;
  padding: 0;
  border: 0;
  cursor: pointer;
`;

const overlayShow = keyframes`
  from { opacity: 0 }
  to { opacity: 1 }
`;

const StyledDialogOverlay = styled(DialogOverlay)`
  background-color: rgba(0, 0, 0, 0.2);
  position: fixed;
  inset: 0;

  animation-name: ${overlayShow};
  animation-duration: 150ms;
  animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
`;

const contentShow = keyframes`
  from { opacity: 0; transform: translate(-50%, -48%) scale(0.96) }
  to { opacity: 1; transform: translate(-50%, -50%) scale(1) }
`;

const StyledDialogContent = styled(DialogContent)`
  position: fixed;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);
  animation-name: ${contentShow};
  animation-duration: 150ms;
`;

export const CardItem = ({ data }: { data: CardType }) => {
  const { audio, category, img, name } = data;
  const rootRef = useRootRef();

  return (
    <Dialog>
      <StyledDialogTrigger>
        <StyledCardItem>
          <StyledCardImg src={img} alt={name} draggable="false" />
        </StyledCardItem>
      </StyledDialogTrigger>

      <DialogPortal container={rootRef}>
        <StyledDialogOverlay />
        <StyledDialogContent>
          <StyledCardItem>
            <StyledCardImg src={img} alt={name} draggable="false" />
          </StyledCardItem>
        </StyledDialogContent>
      </DialogPortal>
    </Dialog>
  );
};
