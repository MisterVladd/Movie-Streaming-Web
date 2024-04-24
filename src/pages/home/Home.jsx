import { useState } from 'react';
import { trendings, watchings } from '../../database/films';
import { Heart } from '../../shared/icons/Home/Heart';
import { Header } from '../../shared/ui/Header/Header';
import { Trending } from '../../shared/ui/Trending/Trending';
import { Watching } from '../../shared/ui/Watching/Watching';
import './Home.scss';

export const Home = () => {
  const listItems = trendings.map((trending) => <Trending key={trending.id} trending={trending} />);
  const listWatching = watchings.map((watching) => <Watching key={watching.id} watching={watching} />);
  const [isActive, setIsActive] = useState(false);

  const toggleActive = () => {
    setIsActive(!isActive);
  };
  return (
    <>
    <div className="home">
      <div className="welcome">
        <img className="img" src="./public/home/welcome.jpg" alt="Welcome" />
        <div className="welcome__header">
        <Header />
        </div>
        <div className="welcome__name">
          <div className="welcome__name__title">Insider</div>
          <div className="welcome__name__desc">2022 | Comedy horror | 1 Season</div>
          <div className="welcome__name__btn">
            <a href='#' className="btn1">Watch now</a>
            <div className={`btn2 ${isActive ? 'active' : ''}`} onClick={toggleActive}><Heart /></div>
          </div>
        </div>
      </div>
      <div className="films">
      <div className="trending-title">
        Trending
      </div>
      <div className="trending-list">
      {listItems}
      </div>
      <div className="watching-title">
      Continue watching
      </div>
      <div className="watching-list">
      {listWatching}
      </div>
      </div>
    </div>
  </>
  )
}
