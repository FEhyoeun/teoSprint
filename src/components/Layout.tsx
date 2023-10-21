import { Link, Outlet } from 'react-router-dom';
import SideNavBar from './navBars/SideNavBar';
import TopNavBar from './navBars/TopNavBar';
import styled from '@emotion/styled';
import { _mainCol200, _mainCol300, _mainColBg } from '../constants/colors';
import { _mainHeight, _mainWidth } from '../constants/sizes';

export const Layout = () => {
  const onPlayBtnClick = () => {
    alert('준비중인 서비스 입니다');
  };
  return (
    <MainWrapper>
      <Header>
        <HomeLogo to="/">Home</HomeLogo>
        <TopNavBar />
      </Header>
      <SideSection>
        <button onClick={onPlayBtnClick}>▶️</button>
        <SideNavBar />
      </SideSection>
      <OutletWrapper>
        <Outlet />
      </OutletWrapper>
    </MainWrapper>
  );
};

const MainWrapper = styled.main`
  background-color: ${_mainColBg};
  width: ${_mainWidth};
  height: ${_mainHeight};
  display: grid;
  grid-template-columns: 10fr 1fr;
  grid-template-rows: 1fr 10fr;
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
`;

const HomeLogo = styled(Link)`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background-color: red;
`;

const OutletWrapper = styled.section`
  grid-column: 1/2;
  grid-row: 2/3;
  background-color: ${_mainCol300};
`;
