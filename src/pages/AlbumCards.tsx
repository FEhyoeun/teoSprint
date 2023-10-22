import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import CARD_MOCK from '../assets/card/card_mock.json'
import { useParams } from 'react-router';
export default function AlbumCards() {
    const { category } = useParams() as { category: string };
    const [url, setUrl] = useState("");
    useEffect(() => {
        setUrl(category);
    }, [])

    return (
        <CardsWrapper>
            <CardGrid>
                {CARD_MOCK.filter(card => card.category === url).slice(0, 8).
                    map(card =>
                        <div key={card.name}>
                            <img style={{ width: '90%' }} src={`/${card.img}`} alt={card.name} draggable="false" />
                        </div>)}
            </CardGrid>
        </CardsWrapper>
    );
}

const CardsWrapper = styled.div`
    display: flex;
`

const CardGrid = styled.div`
            width: 100%;
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            grid-template-rows: auto;
            `;