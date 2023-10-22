import { useState } from 'react';
import styled from '@emotion/styled';
import CARD_MOCK from '../assets/card/card_mock.json';
import { useParams } from 'react-router';
import { CardItem } from '../components/card/CardItem';
import { CardPage } from '../components/card/CardPage';
export default function AlbumCards() {
    const { category } = useParams() as { category: string };
    const [currentPage, setCurrentPage] = useState(0); // 계산 편의성을 위해 첫 페이지를 0으로 설정

    const nextPage = currentPage + 1;
    const prevPage = currentPage - 1;

    const cardList = CARD_MOCK.filter((c) => c.category === category);

    const hasNextPage = cardList.slice(nextPage * 8, (nextPage + 1) * 8).length !== 0;
    const hasPrevPage =
        currentPage !== 0 || cardList.slice(prevPage * 8, currentPage * 8).length !== 0;

    const handleClickNext = () => setCurrentPage((page) => page + 1);
    const handleClickPrev = () => setCurrentPage((page) => page - 1);

    const startIndex = currentPage * 8;
    const endIndex = nextPage * 8;

    return (
        <CardsWrapper>
            {hasNextPage && <CardPage.Next onClick={handleClickNext} />}
            {hasPrevPage && <CardPage.Prev onClick={handleClickPrev} />}
            {CARD_MOCK.filter((c) => c.category === category)
                .slice(startIndex, endIndex)
                .map((card) => (
                    <CardBag>
                        <CardItem data={card} key={card.name} />
                    </CardBag>
                ))}
        </CardsWrapper>
    );
}

const CardsWrapper = styled.div`
    position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 20px;
  overflow: hidden;
`;

const CardBag = styled.div`
border: none;
    border: 2px solid gray;
    padding: 0.5rem;
    border-top: none;
`