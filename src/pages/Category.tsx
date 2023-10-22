import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import { CardItem } from '../components/card/CardItem';

import CARD_MOCK from '../assets/mock.json';

export const Category = () => {
  const { category } = useParams();
  const [page, setPage] = useState(0); // 계산 편의성을 위해 첫 페이지를 0으로 설정

  const startIndex = page * 8;
  const endIndex = (page + 1) * 8;

  return (
    <>
      {CARD_MOCK.filter((c) => c.category === category)
        .slice(startIndex, endIndex)
        .map((card) => (
          <CardItem data={card} key={card.name} />
        ))}
    </>
  );
};
