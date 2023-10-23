import styled from '@emotion/styled';
import { Outlet } from 'react-router';
import { _mainColBg_Dark, _mainColGreen_Dark } from '../constants/colors';
export default function Album() {
  return (
    <AlbumPage>
      <AlbumSpringWrapper />
      <Cards>
        <Outlet />
      </Cards>
    </AlbumPage>
  );
}
const AlbumPage = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 2px;
  position: relative;
`;
const AlbumSpringWrapper = styled.div`
  width: 2rem;
  height: 100%;
  background-color: ${_mainColBg_Dark};
margin-right: 0.5rem;
position: absolute;
left: -2rem;
`

const Cards = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`