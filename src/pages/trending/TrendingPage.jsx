import { trendings } from "../../database/films";
import { Header } from "../../shared/ui/Header/Header";
import { Trending } from "../../shared/ui/Trending/Trending";
import "./Trending.scss";

export const TrendingPage = () => {
  const listItems = trendings.map((trending) => (
    <Trending key={trending.id} trending={trending} />
  ));
  return (
    <>
      <Header />
      <div className="films">
        <div className="trending-title">Trending at this moment</div>
        <div className="trending">
          <div className="trending-list">{listItems}</div>
        </div>
      </div>
    </>
  );
};
