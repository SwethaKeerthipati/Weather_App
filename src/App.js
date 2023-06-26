import React from "react";
import Form from "./components/Form";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import List from "./components/List";

function App() {
  
  const [activities, setActivities] = useState([]);

  function handleAddActivity(newActivity) {
    setActivities([...activities,{id:uuidv4(),...newActivity}]);
    
  }

  return (
    <div>
      <h1>Weather App</h1>
      <List  activities= {activities}/>
      <Form handleAddActivity={handleAddActivity}  />
    </div>
  );
}

export default App;
