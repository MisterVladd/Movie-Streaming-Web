import { useState } from "react";
import { films, trendings } from "../../database/films";
import { Header } from "../../shared/ui/Header/Header";
import { Trending } from "../../shared/ui/Trending/Trending";

export const TrendingPage = () => {
  const listItems = trendings.map((trending) => (
    <Trending key={trending.id} trending={trending} />
  ));

  const [selectedTrend, setSelectedTrend] = useState(null);

  const handleTrendClick = (trendId) => {
    setSelectedTrend(trendId);
  };
  return (
    <div className="trendingPage">
      <Header />
      <div className="films">
        <div className="trending-title">Trending at this moment</div>
        <div>
          <div className="trending-list">
            {films.map((content) => (
              <div
                key={content.id}
                className="trending"
                onClick={() => handleTrendClick(content.id)}
              >
                <Trending
                  trending={trendings.find((trend) => trend.id === content.id)}
                  isSelected={selectedTrend === content.id}
                  content={content}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="proba"></div>
    </div>
  );
};
