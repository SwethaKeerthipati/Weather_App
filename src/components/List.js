import React from 'react'

export default function List({ filterActivities}) {
  return (
    <>
    <ul className="activities-list">
      {filterActivities.map((activity) => (
        <ol key={activity.id} className="activity-list__item">
          <h3>{activity.name}</h3>
        </ol>
      ))}
    </ul>
  </>
  )
}
