import styled from '@emotion/styled';
import { useEffect } from 'react';
import { Outlet } from 'react-router';
export default function Album() {
    return (
        <AlbumPage>
            <AlbumPaper>
                <Outlet />
            </AlbumPaper>
        </AlbumPage>
    );
}
const AlbumPage = styled.section`
width: 100%;
height: 100%;
display: flex;
justify-content: flex-start;
align-items: center;
padding-left: 2px;
`
const AlbumPaper = styled.div`
width: 98%;
height: 95%;
background-color: white;
border-radius: 0px 5px 5px 0px;
box-shadow: 13px 0px 10px -2px rgba(0,0,0,0.4);
`