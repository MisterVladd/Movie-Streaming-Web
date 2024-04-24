import { Link } from "react-router-dom";
import { LogoIcon } from "../../icons/Logo/LogoIcon";
import { Film } from "../../icons/SidebarPages/Film";
import { Heart } from "../../icons/SidebarPages/Heart";
import { TrendingUp } from "../../icons/SidebarPages/TrendingUp";
import { Calendar } from "../../icons/SidebarPages/Calendar";
import { Users } from "../../icons/SidebarPages/Users";
import { Message } from "../../icons/SidebarPages/Message";
import { Sliders } from "../../icons/SidebarPages/Sliders";
import { Logout } from "../../icons/SidebarPages/Logout";
import { useState } from "react";

export const Sidebar = () => {
  const [activeLink, setActiveLink] = useState(1);


  const setActive = (link) => {
    setActiveLink(link);
  };
  return (
    <div className="sidebar">
      <LogoIcon />
      <div className="items">
        <div className="links">
          <Link className={`links-item ${activeLink === 1 ? 'is-active' : ''}`} onClick={() => setActive(1)} to="/">
            <Film />
            Home
          </Link>
          <Link className={`links-item ${activeLink === 2 ? 'is-active' : ''}`} onClick={() => setActive(2)} to="/favourites">
            <Heart />
            Favourites
          </Link>
          <Link className={`links-item ${activeLink === 3 ? 'is-active' : ''}`} onClick={() => setActive(3)} to="/trending">
            <TrendingUp />
            Trending
          </Link>
          <Link className={`links-item ${activeLink === 4 ? 'is-active' : ''}`} onClick={() => setActive(4)} to="/coming-soon">
            <Calendar />
            Coming soon
          </Link>
        </div>
        <div className="links">
          <Link className={`links-item ${activeLink === 5 ? 'is-active' : ''}`} onClick={() => setActive(5)} to="/community">
            <Users />
            Community
          </Link>
          <Link className={`links-item ${activeLink === 6 ? 'is-active' : ''}`} onClick={() => setActive(6)} to="/social">
            <Message />
            Social
          </Link>
        </div>
        <div className="links">
          <Link className={`links-item ${activeLink === 7 ? 'is-active' : ''}`} onClick={() => setActive(7)} to="/settings">
            <Sliders />
            Settings
          </Link>
          <Link className={`links-item ${activeLink === 8 ? 'is-active' : ''}`} onClick={() => setActive(8)} to="/logout">
            <Logout />
            Logout
          </Link>
        </div>
      </div>
    </div>
  );
};
