import styled from '@emotion/styled';
import { Outlet, useLocation } from 'react-router-dom';

import SideNavBar from './navBars/SideNavBar';
import TopNavBar from './navBars/TopNavBar';

import { _mainHeight, _mainSpringGapWidth, _mainWidth } from '../constants/sizes';
import { _mainColGreen, _mainColBlue, _mainColOrange, _mainColBg_Dark, _mainColGreen_Dark, _mainColOrange_Dark } from '../constants/colors';
import { PATH } from '../constants/path';

import MavoFace from '../assets/charecter/MaVo_Face.svg';
import MavoLogo from '../assets/charecter/MaVo_Logo.svg';

export const Layout = () => {
  const { pathname } = useLocation();
  const param = pathname.includes(PATH.CATEGORIES) ? PATH.CATEGORIES : PATH.ALBUM;

  return (
    <MainWrapper>
      <Header>
        <Logo>
          <LogoFace src={MavoFace} />
          <LogoText src={MavoLogo} />
        </Logo>
        <TopNavBar />
      </Header>
      <SideSection>
        <SideNavBar />
      </SideSection>
      <OutletWrapper param={param}>
        <AlbumSpringWrapper param={param} />
        <AlbumPaper>
          <Outlet />
        </AlbumPaper>
      </OutletWrapper>
    </MainWrapper>
  );
};

const MainWrapper = styled.main`
  width: ${_mainWidth};
  height: ${_mainHeight};
  display: grid;
  grid-template-columns: 12fr 1fr;
  grid-template-rows: 1fr 14fr;
`;
const Header = styled.header`
  grid-column: 1/2;
  grid-row: 1/2;
  display: flex;
  justify-content: space-between;
`;

const SideSection = styled.section`
  grid-column: 2/3;
  grid-row: 2/3;
  background-color: ${_mainColBlue};
  display: flex;
  padding: 5px;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-top-right-radius: 1rem;
  border-bottom-right-radius: 1rem;
`;

const Logo = styled.div`
  width: 13rem;
  display: flex;
  position: relative;
`;

const OutletWrapper = styled.section<{ param: string }>`
  grid-column: 1/2;
  grid-row: 2/3;
display: flex;
align-items: center;
background-color: ${(props) => (props.param === PATH.CATEGORIES ? _mainColOrange : _mainColGreen)};
`;

const AlbumPaper = styled.div`
  width: 93%;
  height: 95%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 0px 5px 5px 0px;
  box-shadow: 13px 0px 10px -2px rgba(0, 0, 0, 0.4);
`;

const AlbumSpringWrapper = styled.div<{ param: string }>`
  width: ${_mainSpringGapWidth};
  height: 100%;
  background-color: ${props => props.param === 'album' ? _mainColGreen_Dark : _mainColOrange_Dark};
/* margin-right: 0.5rem; */
`

const LogoFace = styled.img`
width: 5rem;
position: absolute;
top: -0.5rem;
`;
const LogoText = styled.img`
width: 10rem;
position: absolute;
top: -2.5rem;
left: 4rem;
`;
