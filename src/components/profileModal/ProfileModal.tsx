import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import {
  Dialog,
  DialogPortal,
  DialogTrigger,
  DialogContent,
  DialogClose,
} from '@radix-ui/react-dialog';

import { StyledDialogOverlay } from '../card/CardModal';

import { useRootRef } from '../../pages/Root';

const StyledDialogTrigger = styled(DialogTrigger)`
  background-color: transparent;
  padding: 0;
  border: 0;
  cursor: pointer;
`;

const contentShow = keyframes`
  from { opacity: 0; transform: translate(-50%, -48%) scale(0.96) }
  to { opacity: 1; transform: translate(-50%, -50%) scale(1) }
`;

const StyledDialogContent = styled(DialogContent)`
  position: fixed;
  top: 50%; // TODO: top, left 조정 필요
  left: 50%;
  width: 952px;
  height: 541px;
  border-radius: 10px;
  background-color: white;

  display: flex;
  flex-direction: column;
  align-items: center;

  transform: translate(-50%, -50%);
  animation-name: ${contentShow};
  animation-duration: 150ms;
`;

const StyledTitle = styled.div`
  padding: 37px;
  font-size: 48px;
`;

const StyledProfileWrapper = styled.div`
  flex-grow: 1;
  flex-basis: 0;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  column-gap: 121px;
`;

export const ProfileModal = ({
  children,
  onImgSelect,
}: {
  children: React.ReactNode;
  onImgSelect: (url: string) => void;
}) => {
  const rootRef = useRootRef();

  const handleProfileClick = (url: string) => onImgSelect(url);

  return (
    <Dialog>
      <StyledDialogTrigger>{children}</StyledDialogTrigger>

      <DialogPortal container={rootRef}>
        <StyledDialogOverlay />

        <StyledDialogContent>
          <StyledTitle>프로필 이미지를 선택하세요!</StyledTitle>

          <StyledProfileWrapper>
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <DialogClose key={num} asChild>
                <input
                  type="image"
                  onClick={() => handleProfileClick(`/src/assets/profile/profile_${num}.svg`)}
                  src={`/src/assets/profile/profile_${num}.svg`}
                  alt={`profile_${num}`}
                  width="169px"
                  height="169px"
                />
              </DialogClose>
            ))}
          </StyledProfileWrapper>
        </StyledDialogContent>
      </DialogPortal>
    </Dialog>
  );
};
