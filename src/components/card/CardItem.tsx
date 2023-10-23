import { Card as CardType } from '../../types/card';
import { CardModal } from './CardModal';

export const CardItem = ({ data }: { data: CardType }) => {
  const { audio, category, img, name } = data;

  return (
    <CardModal name={name}>
      <img src={`${img}`} alt={name} draggable="false" />
    </CardModal>
  );
};
