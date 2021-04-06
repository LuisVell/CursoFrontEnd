import { Link } from "react-router-dom";

const Sidebar = () => (
  <div>
    <ul>
      <li>
        <Link to="/create">Create new post</Link>
      </li>
      <li>
        <Link to="/list-posts">List posts</Link>
      </li>
    </ul>
  </div>
);

export default Sidebar;
