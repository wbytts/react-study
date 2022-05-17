import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'

let app = (
  <div className="logs">
    <div className="item">
      <div className="date">
        <div className="month">五月</div>
        <div className="day">17</div>
      </div>
      <div className="content">
        <h2 className="desc">学习Vue...</h2>
        <div className="time">一小时</div>
      </div>
    </div>
    <div className="item">
      <div className="date">
        <div className="month">五月</div>
        <div className="day">17</div>
      </div>
      <div className="content">
        <h2 className="desc">学习React...</h2>
        <div className="time">一小时</div>
      </div>
    </div>
  </div>
);

export default app;
