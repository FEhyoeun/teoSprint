import { Link } from 'react-router-dom';

import { PATH } from '../../constants/path';
import categoryData from '../category/mock.json';

export default function SideNavBar() {
  return (
    <div>
      <nav>
        <ul>
          {categoryData.data.map((category) => (
            <li key={category.index}>
              <Link to={`/${PATH.CATEGORIES}/${category.categoryName}`}>{category.icon}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
