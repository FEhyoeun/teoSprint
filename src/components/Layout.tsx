import styled from '@emotion/styled';
import { Link, Outlet, useLocation } from 'react-router-dom';

import SideNavBar from './navBars/SideNavBar';
import TopNavBar from './navBars/TopNavBar';

import { _mainHeight, _mainWidth } from '../constants/sizes';
import { _mainCol300, _mainCol400, _mainColBg } from '../constants/colors';
import { PATH } from '../constants/path';

export const Layout = () => {
  const { pathname } = useLocation();
  const param = pathname.includes(PATH.CATEGORIES) ? PATH.CATEGORIES : PATH.ALBUM;
  const homeLink = `${PATH.ALBUM}/동물`;

  return (
    <MainWrapper>
      <Header>
        <HomeLogo to={homeLink}>Home</HomeLogo>
        <TopNavBar />
      </Header>
      <SideSection>
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
