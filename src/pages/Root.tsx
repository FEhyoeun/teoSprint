import React, { createContext, useContext, useEffect, useState } from 'react';
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

const RootContext = createContext<HTMLDivElement | null>(null);
export const useRootRef = () => useContext(RootContext);

export const Root = () => {
  const navigate = useNavigate();
  const [rootRef, setRootRef] = useState<HTMLDivElement | null>(null);

  useEffect(() => {
    const storedName = localStorage.getItem('name');
    if (storedName) {
      navigate(`/${PATH.CATEGORIES}`);
    } else {
      navigate(`/${PATH.PROFILE}`);
    }
  }, [navigate]);

  return (
    <RootContext.Provider value={rootRef}>
      <Container ref={setRootRef}>
        <Wrapper>
          <Outlet />
        </Wrapper>
      </Container>
    </RootContext.Provider>
  );
};
