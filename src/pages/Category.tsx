import React, { useState } from 'react';
import { data } from '../components/category/mock.json';
import { Outlet, useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import { PATH } from '../constants/path';

const StyledCategory = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  flex-wrap: wrap;
`;

const StyledCategoryItem = styled.input`
  border-radius: 5px;
  width: 150px;
  height: 180px;
  cursor: pointer;
`;

export const Category = () => {
  const [category, setCategory] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleCateogryClick = (category: string) => {
    navigate(`/${PATH.CATEGORIES}/${category}`);
    setCategory(category);
  };

  if (category) {
    return (
      <StyledCategory>
        <Outlet />
      </StyledCategory>
    );
  }

  return (
    <StyledCategory>
      {data.map((c) => (
        <StyledCategoryItem
          type="image"
          src={c.imgUrl}
          key={c.categoryName}
          onClick={() => handleCateogryClick(c.categoryName)}
        />
      ))}
    </StyledCategory>
  );
};
