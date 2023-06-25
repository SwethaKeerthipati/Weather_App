import React from "react";
import Form from "./components/Form";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [activities, setActivities] = useState([]);
  function handleAddActitvity(newActivity) {
    // setActivities([...activities, newActivity]);
    const updatedActivities = [...activities, { ...newActivity, id: uuidv4() }];
    setActivities(updatedActivities);
  }

  return (
    <div>
      <Form handleAddActitvity={handleAddActitvity} />
    </div>
  );
}

export default App;
