import { CategoryItem as CategoryItemType } from '../../types/CategoryItem';

export const CategoryItem = ({ index, categoryName }: CategoryItemType) => {
  return (
    <>
      <h1>{index}</h1>
      <div>{categoryName}</div>
    </>
  );
};
