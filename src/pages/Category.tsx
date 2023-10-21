import { useState } from 'react';
import { CategoryItem } from '../components/category/CategoryItem';
import { data } from '../components/category/mock.json';
import { Outlet } from 'react-router-dom';

export const Category = () => {
  const [category, setCategory] = useState(data);
  console.log('category', category);

  return (
    <>
      <h1>Category</h1>
      {category.map((c) => (
        <CategoryItem key={c.index} categoryName={c.categoryName} />
      ))}
    </>
  );
};
