import React from 'react'

export default function List({ activities}) {
  return (
    <>
    <ul className="activities-list">
      {activities.map((activity) => (
        <ol key={activity.id} className="activity-list__item">
          <h3>{activity.name}</h3>
        </ol>
      ))}
    </ul>
  </>
  )
}
