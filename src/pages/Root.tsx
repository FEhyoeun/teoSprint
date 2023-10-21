import { Outlet } from 'react-router-dom';
import { Layout } from '../components/Layout';

export const Root = () => {
  return (
    <>
      <h1>Root</h1>
      <Outlet />
    </>
  );
};
