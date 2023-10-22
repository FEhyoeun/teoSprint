import styled from '@emotion/styled';
import { Link, Outlet, useLocation } from 'react-router-dom';

import SideNavBar from './navBars/SideNavBar';
import TopNavBar from './navBars/TopNavBar';

import { _mainHeight, _mainWidth } from '../constants/sizes';
import { _mainCol300, _mainCol400, _mainColBg } from '../constants/colors';
import { PATH } from '../constants/path';

export const Layout = () => {
  const onPlayBtnClick = () => {
    alert('준비중인 서비스 입니다');
  };

  const { pathname } = useLocation();
  console.log(pathname);
  const param = pathname.includes(PATH.CATEGORIES) ? PATH.CATEGORIES : PATH.ALBUM;

  return (
    <MainWrapper>
      <Header>
        <HomeLogo to="/">Home</HomeLogo>
        <TopNavBar />
      </Header>
      <SideSection>
        <PlayBtn onClick={onPlayBtnClick}>
          <span>▶️</span></PlayBtn>
        <SideNavBar />
      </SideSection>
      <OutletWrapper param={param}>
        <Outlet />
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
  background-color: ${_mainColBg};
  display: flex;
  padding: 5px;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-top-right-radius: 1rem;
  border-bottom-right-radius: 1rem;
`;

const HomeLogo = styled(Link)`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background-color: red;
`;

const OutletWrapper = styled.section<{ param: string }>`
  grid-column: 1/2;
  grid-row: 2/3;
  background-color: ${(props) => (props.param === PATH.CATEGORIES ? _mainCol300 : _mainCol400)};
`;

const PlayBtn = styled.button`
width: 2.5rem;
height: 2.5rem;
  background: none;
  border: 2px solid black;
  border-radius: 50%;
  span{
font-size: large;
  }
  &:hover{
    cursor: pointer;
  }
`