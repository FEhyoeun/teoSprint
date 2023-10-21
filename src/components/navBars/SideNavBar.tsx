import { Link } from 'react-router-dom';
import categoryData from '../category/mock.json';

export default function SideNavBar() {
  return (
    <div>
      <nav>
        <ul>
          {categoryData.data.map((category) => (
            <li key={category.index}>
              <Link to={`${category.index}`}>{category.icon}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
