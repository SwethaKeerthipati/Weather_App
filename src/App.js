import React from "react";
import Form from "./components/Form";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import List from "./components/List";

function App() {
  
  let [activities, setActivities] = useState([]);
  const isGoodWeather = true


  function handleAddActivity(newActivity) {
    setActivities([...activities,{id:uuidv4(),...newActivity}]);
    
  }


  // function handleFilter(activities) {
  
 let goodWeatherActivities = activities.filter((activity) => activity.isForGoodWeather === isGoodWeather )
 let badWeatherActivities = activities.filter((activity) => activity.isForGoodWeather === !isGoodWeather )
   
    // return goodAct

//  ;}


  return (
    <div>
      <h1>Weather App</h1>
      <List  filterActivities= {goodWeatherActivities}/>
      <Form handleAddActivity={handleAddActivity}   />
    </div>
  );
}

export default App;
