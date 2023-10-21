import { CardItem } from '../components/card/CardItem';

import CARD_MOCK from '../components/card/mock.json';

export const Card = () => {
  return (
    <div>
      {CARD_MOCK.map((card) => (
        <CardItem data={card} />
      ))}
    </div>
  );
};
