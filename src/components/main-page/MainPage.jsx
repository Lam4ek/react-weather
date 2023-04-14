import Header from "./Header";
import DailyWeather from "./daily-weather/DailyWeather";
import WeekContainer from "./WeekContainer";

function MainPage() {
  return (
    <div className="content">
      <Header />
      <DailyWeather />
      <WeekContainer />
    </div>
  );
}

export default MainPage;
