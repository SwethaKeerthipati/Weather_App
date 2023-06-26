import React from 'react'


export default function List({ filterActivities,onDeleteActivity}) {
  return (
    <>
    <ul className="activities-list">
      {filterActivities.map((activity) => (
        <ol key={activity.id} className="activity-list__item">
          <h3>{activity.name}</h3>
          <button
              className="button-delete task-button"
              onClick={() => onDeleteActivity(activity.id)}
            >
              ❌
            </button>
        </ol>
      ))}
    </ul>
  </>
  )
}




