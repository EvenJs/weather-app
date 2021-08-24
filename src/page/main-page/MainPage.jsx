import React from 'react';

import SearchBar from '../../components/search-bar/SearchBar';
import Time from '../../components/time/Time';
import Weather from '../../components/weather/Weather';
import MoreInfo from '../../components/more-info/MoreInfo';
import SevenDays from '../../components/next-seven-days/SevenDays';

const MainPage = () => (
  <div>
    <SearchBar />
    <Time />
    <Weather />
    <MoreInfo />
    <SevenDays />
  </div>
);

export default MainPage;
