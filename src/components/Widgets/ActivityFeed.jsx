import React from 'react';
import './Widget.css';

const ActivityFeed = ({ data }) => {
  return (
    <div className="widget">
      <h2>Recent Activity</h2>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.activity}</li>
        ))}
      </ul>
    </div>
  );
};

export default ActivityFeed;
