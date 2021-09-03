import React from 'react';

import EachDay from '../EachDay';
import './SevenDays.styles.scss';

const SevenDays = ({ input }) => (
  <div className="next-seven-days">
    {input.map((data) => (
      <EachDay
        week={data.time}
        url={data.url}
        weather={data.weather}
        temperature={data.temperature}
      />
    ))}
  </div>
);

/*
    const SevenDays = ({sevenDaysData}) => (
      sevenDaysData.map((data) => {
        const { week, url, temp } = data;

        return (
          <EachDay week={week} ... />
        )
      })
    )

    <WeatherApp /> -> call APIs :
    const { current, feature24Hours, forecast } = API.response.data;
      1. current
      2. feature24Hours
      3. forecast

    <Current current={current} />

    const reducer =  => return 状态 //状态
    const action = => return cbFn(状态) // 修改状态的方法
    redux-saga

    父组件X() {
      组件A(状态+修改方法) {
        reducer => 状态
      }

      组件B() {
        action({}) 运行修改状态
      }
    }

    Class组件 VS Function组件
  */

export default SevenDays;
