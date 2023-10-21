import { Link } from 'react-router-dom';

const topNavigations = [
  {
    id: 'vocalist',
    name: '단어장',
  },
  {
    id: 'album',
    name: '단어장',
  },
];
export default function TopNavBar() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/category">단어장</Link>
          </li>
          <li>
            <Link to="/album">앨범</Link>
          </li>
          <li>
            <Link to="/emergency ">비상연락망</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
