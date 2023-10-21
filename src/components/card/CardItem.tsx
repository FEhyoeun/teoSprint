import { Card as CardType } from '../../types/card';

export const CardItem = ({ data }: { data: CardType }) => {
  const { audio, category, img, name } = data;

  return (
    <div>
      <img src={img} alt={name} draggable="false" />
      <div>{name}</div>
    </div>
  );
};
