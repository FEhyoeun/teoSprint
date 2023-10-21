import { Link, Outlet } from 'react-router-dom';
import SideNavBar from './navBars/SideNavBar';
import TopNavBar from './navBars/TopNavBar';

export const Layout = () => {
  return (
    <>
      <h2>Layout</h2>
      {/* 마스코트 생성시 대체 */}
      <Link to="/">Home</Link>
      <TopNavBar />
      <SideNavBar />
      <Outlet />
    </>
  );
};
