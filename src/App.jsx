import React from 'react';
import { Switch, Route } from 'react-router';

// import WeatherApp from './components/WeatherApp';
import MainPage from './page/main-page/MainPage';
import DetailPage from './page/detail-page/DetailPage';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/details" component={DetailPage} />
      </Switch>
    </div>
  );
}

export default App;
