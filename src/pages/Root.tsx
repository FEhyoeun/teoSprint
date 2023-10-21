import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';

import { PATH } from '../constants/path';

const Container = styled.div`
  display: flex;
  align-items: center;
  height: 100vh;
`;

const Wrapper = styled.div`
  width: 100vw;
  max-height: 700px;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Root = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const storedName = localStorage.getItem('name');
    if (storedName) {
      navigate(`/${PATH.CATEGORIES}`);
    } else {
      navigate(`/${PATH.CATEGORIES}`);
    }
  }, [navigate]);
  return (
    <Container>
      <Wrapper>
        <Outlet />
      </Wrapper>
    </Container>
  );
};
