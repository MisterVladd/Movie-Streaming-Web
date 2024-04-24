import { Link } from "react-router-dom";
import { Search } from "../../icons/Header/Search";
import { Bell } from "../../icons/Header/Bell";

export const Header = () => {
  return (
    <div className="header">
      <div className="link">
        <Link to="/">Movies</Link>
        <Link to="/">Series</Link>
        <Link to="/">Documentaries</Link>
      </div>
      <div className="icon">
        <Search />
        <Bell />
        <div className="avatar">
          <div className="avatar-icon">
            <img src="./public/avatar.jpg" alt="Avatar" />
          </div>
          <div className="avatar-name">Vladyslav</div>
        </div>
      </div>
    </div>
  );
};
