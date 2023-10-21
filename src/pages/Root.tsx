import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from '@emotion/styled';

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
  return (
    <Container>
      <Wrapper>
        <Outlet />
      </Wrapper>
    </Container>
  );
};
