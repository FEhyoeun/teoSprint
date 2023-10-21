import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import SideNavBar from './navBars/SideNavBar';
import TopNavBar from './navBars/TopNavBar';
import styled from '@emotion/styled';
import { _mainCol300, _mainCol400, _mainColBg } from '../constants/colors';
import { _mainHeight, _mainWidth } from '../constants/sizes';

export const Layout = () => {
  const onPlayBtnClick = () => {
    alert('준비중인 서비스 입니다');
  };

  // TODO: index.tsx 참고, 라우터 이슈 해결 바랍니다.
  // const { bookmark } = useParams();

  const { pathname } = useLocation();
  const param = pathname.includes('category') ? 'category' : 'album';

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
      <OutletWrapper param={param}>
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

const OutletWrapper = styled.section<{ param: string }>`
  grid-column: 1/2;
  grid-row: 2/3;
  background-color: ${(props) => (props.param === 'category' ? _mainCol300 : _mainCol400)};
`;
