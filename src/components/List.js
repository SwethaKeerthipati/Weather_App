import React from "react";

import "../styles/List.css";
export default function List({
  filterActivities,
  onDeleteActivity,
  isGoodWeather,
}) {
  return (
    <div className="list">
      <h2 className="weather-heading">
        {isGoodWeather
          ? "The weather is Awesome! Go outside and:"
          : "Bad Weather Outside! Here's what you can do now:"}
      </h2>
      <ul className="activities-list">
        {filterActivities.map((activity) => (
          <l key={activity.id} className="activity-list__item">
            <h3>{activity.name}</h3>
            <button
              className="button-delete task-button"
              onClick={() => onDeleteActivity(activity.id)}
            >
              ✘
            </button>
          </l>
        ))}
      </ul>
    </div>
  );
}
