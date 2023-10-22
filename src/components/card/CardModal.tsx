import React from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogOverlay,
  DialogPortal,
  DialogTrigger,
} from '@radix-ui/react-dialog';

import { useRootRef } from '../../pages/Root';
import CLOSE_IMG from '../../assets/close.svg';
import VOLUME_IMG from '../../assets/volume.svg';

const translateAnimation = keyframes`
  from {
    transform: translateX(500%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const StyledDialogTrigger = styled(DialogTrigger)`
  background-color: transparent;
  padding: 0;
  border: 0;
  cursor: pointer;
  animation: ${translateAnimation} 1s ease;
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
  top: 50%; // TODO: top, left 조정 필요
  left: 50%;
  width: 428px;
  height: 567.88px;

  display: flex;
  flex-direction: column;

  background-color: white;
  border-radius: 8px;

  transform: translate(-50%, -50%);
  animation-name: ${contentShow};
  animation-duration: 150ms;
`;

const StyledButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledTTSButton = styled.input`
  width: fit-content;
  height: fit-content;
  margin: 10px; // TODO: 정확한 값 기입 필요
`;
const StyledCloseButton = styled.input`
  width: fit-content;
  height: fit-content;
  margin: 20px; // TODO: 정확한 값 기입 필요
`;
const StyledCardImageWrapper = styled.div`
  align-self: center; // TODO: 스타일 조정 필요
`;

export const CardModal = ({ children }: { children: React.ReactNode }) => {
  const rootRef = useRootRef();
  const handleTTSClick = () => alert('준비중입니다.');

  return (
    <Dialog>
      <StyledDialogTrigger>{children}</StyledDialogTrigger>

      <DialogPortal container={rootRef}>
        <StyledDialogOverlay />

        <StyledDialogContent>
          <StyledButtonWrapper>
            <StyledTTSButton
              type="image"
              alt="speech to TTS"
              onClick={handleTTSClick}
              src={VOLUME_IMG}
              draggable="false"
            />

            <DialogClose asChild>
              <StyledCloseButton type="image" alt="close modal" src={CLOSE_IMG} draggable="false" />
            </DialogClose>
          </StyledButtonWrapper>

          <StyledCardImageWrapper>{children}</StyledCardImageWrapper>
        </StyledDialogContent>
      </DialogPortal>
    </Dialog>
  );
};
