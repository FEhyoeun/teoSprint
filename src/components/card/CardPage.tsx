import styled from '@emotion/styled';
import PrevBtn from '../../assets/prevBtn.svg';
import NextBtn from '../../assets/nextBtn.svg';

const MoveBtn = styled.img<{ isNext: boolean }>`
  position: absolute;
  bottom: 0;
  right: ${({ isNext }) => isNext && 0};
  left: ${({ isNext }) => !isNext && 0};
  // bottom: -10px;
  // right: ${({ isNext }) => isNext && `-30px`};
  // left: ${({ isNext }) => !isNext && `-30px`};
  cursor: pointer;
  z-index: 1;
`;

const Next = ({ onClick }: { onClick: () => void }) => {
  return <MoveBtn src={NextBtn} onClick={onClick} isNext />;
};
const Prev = ({ onClick }: { onClick: () => void }) => {
  return <MoveBtn src={PrevBtn} onClick={onClick} isNext={false} />;
};

export const CardPage = { Next, Prev };
