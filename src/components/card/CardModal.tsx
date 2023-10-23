import { useEffect, useState } from 'react';
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
import { useSpeechRecognition, useSpeechSynthesis } from 'react-speech-kit';
import Icon from '../common/Icon';

const IconStyledPrev = styled(Icon)<{ isNext: boolean }>`
  cursor: pointer;
  position: absolute;
  top: 40%;
  left: -70px;
  border: none;
`;

const IconStyledNext = styled(Icon)<{ isNext: boolean }>`
  cursor: pointer;
  position: absolute;
  top: 40%;
  right: -70px;
  border: none;
`;

import { useRootRef } from '../../pages/Root';
import CARDS_MOCK from '../../assets/card/card_mock.json';
import CLOSE_IMG from '../../assets/close.svg';
import VOLUME_IMG from '../../assets/volume.svg';

import { Card as CardType } from '../../types/card';
import { useLocation } from 'react-router';

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

const translateAlbumAnimation = keyframes`
  from {
    transform: translateY(-500%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
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

const StyledDialogTrigger_Album = styled(StyledDialogTrigger)`
  animation: ${translateAlbumAnimation} 1.5s ease;
`;

const overlayShow = keyframes`
  from { opacity: 0 }
  to { opacity: 1 }
`;

export const StyledDialogOverlay = styled(DialogOverlay)`
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

export const StyledDialogContent = styled(DialogContent)`
  position: fixed;
  top: 50%; // TODO: top, left 조정 필요
  left: 50%;
  width: 428px;
  height: 567.88px;
  border-radius: 8px;

  display: flex;
  flex-direction: column;

  transform: translate(-50%, -50%);
  animation-name: ${contentShow};
  animation-duration: 150ms;
`;

const StyledButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  z-index: 2;
`;

const StyledTTSButton = styled.input`
  width: fit-content;
  height: fit-content;
  margin: 10px 0 0 15px; // TODO: 정확한 값 기입 필요
`;
const StyledCloseButton = styled.input`
  width: fit-content;
  height: fit-content;
  margin: 20px 23px 0 0; // TODO: 정확한 값 기입 필요
`;
const StyledCardImg = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
`;

export const CardModal = ({ children, name }: { children: React.ReactNode; name: string }) => {
  const rootRef = useRootRef();
  const { pathname } = useLocation();
  const initialState = CARDS_MOCK.find((c) => c.name === name);
  const [card, setCard] = useState(initialState as CardType);

  const [voiceText, setVoiceText] = useState('');
  const { speak } = useSpeechSynthesis();
  const [playing, setPlaying] = useState(false);
  const { listen, listening, stop } = useSpeechRecognition({
    onResult: (result: any) => {
      // 음성인식 결과가 value 상태값으로 할당됩니다.
      setVoiceText(result);
    },
  });
  useEffect(() => {
    // 안내 음성이 끝났을 때 인식
    if (!playing) {
      // 말하는 도중이 아닌 말이 끝난 뒤(말 사이 텀이 생기면) 출력
      listen({ interimResults: false });
    }
  }, [listen, playing]);

  const getCard = (direction: 'next' | 'prev') => {
    const currentCategoryCards = CARDS_MOCK.filter((c) => c.category === card?.category);
    const currentIndex = currentCategoryCards.findIndex((c) => c.name === card.name);

    if (direction === 'next' && currentIndex === currentCategoryCards.length - 1)
      return setCard(currentCategoryCards[0]);
    if (direction === 'next') return setCard(currentCategoryCards[currentIndex + 1]);

    if (currentIndex === 0) return setCard(currentCategoryCards[currentCategoryCards.length - 1]);
    return setCard(currentCategoryCards[currentIndex - 1]);
  };
  const handleTTSClick = () => speak({ text: card?.name });
  const handlePrevClick = () => getCard('prev');
  const handleNextClick = () => getCard('next');
  const handleOpenChange = (close: boolean) => close && setCard(initialState as CardType);

  return (
    <Dialog onOpenChange={handleOpenChange}>
      {pathname.includes('album') ? (
        <StyledDialogTrigger_Album>{children}</StyledDialogTrigger_Album>
      ) : (
        <StyledDialogTrigger>{children}</StyledDialogTrigger>
      )}

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

          <StyledCardImg alt={card?.name} src={`${card?.img}`} />

          <IconStyledPrev
            name="chevron-left"
            isNext
            size={96}
            color="white"
            onClick={handlePrevClick}
          />
          <IconStyledNext
            name="chevron-right"
            isNext
            size={96}
            color="white"
            onClick={handleNextClick}
          />
        </StyledDialogContent>
      </DialogPortal>
    </Dialog>
  );
};
