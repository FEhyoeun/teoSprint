import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { Root } from '../pages/Root';
import { Layout } from '../components/Layout';
import { Category } from '../pages/Category';
import Profile from '../pages/Profile';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        // path: '/:bookmark', // TODO: 리액트 라우터가 bookmark가 category일 때 children을 랜더링하는 것이 아니라 본인을 가르키고 있는 것으로 보임
        element: <Layout />,
        children: [
          {
            path: 'category',
            element: <Category />,
          },
          {
            path: 'album',
            element: <h4>Album</h4>,
          },
        ],
      },
      {
        path: 'profile',
        element: <Profile />,
      },
    ],
  },
]);
