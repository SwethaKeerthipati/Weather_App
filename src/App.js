import React from "react";
import Form from "./components/Form";
import { useState ,useEffect ,  } from "react";
import { v4 as uuidv4 } from "uuid";
import List from "./components/List";
import useLocalStorageState from "use-local-storage-state";

function App() {
  let [activities, setActivities] = useLocalStorageState("activities", { defaultValue: []});
  
  const [weather, setWeather] = useState();
  const [location, setLocation] = useLocalStorageState("location", { defaultValue:"europe"} )
  
console.log(location);

  useEffect(() => {
    async function fetchWeather() {
      try {
        const response = await fetch(
          `https://example-apis.vercel.app/api/weather/${location}`
        );
        
        const data = await response.json();
        console.log("data", data);
        setWeather(data);
      //  console.log(data);
        
      } catch (error) {
        console.log(error);
      }
    }

    fetchWeather(); 
  },[setWeather, location]);
//Add Activity
  // function handleAddActivity(newActivity) {
  //   setActivities([...activities,{id:uuidv4(),...newActivity}]);
  //   setLocation(newActivity.location)

  // }

  function handleAddActivity(newActivity) {
    setActivities([...activities, { id: uuidv4(), ...newActivity }]);
    //setLocation(newActivity.location);
  }
  
//Delete button
function handleDeleteActivity(num) {
  setActivities(activities => {
    const updatedActivities = activities.filter(activity => activity.id !== num);
    return updatedActivities;
  });
}

 let goodWeatherActivities = activities.filter((activity) => activity?.isForGoodWeather === weather?.isGoodWeather )
//  let badWeatherActivities = activities.filter((activity) => activity.isForGoodWeather === !weather.isGoodWeather)
   
// const filteredActivities = activities.filter((activity) =>
//     weather.isGoodWeather
//       ? activity.isForGoodWeather
//       : !activity.isForGoodWeather
//   );


if (!weather){
  return
}

  return (
    <div  >
      <h1>Weather App</h1>
      <h2>Welcome to {location}</h2>      
      <ul>
        <ol>{weather?.condition}</ol>
        <ol>{weather?.temperature}</ol>
        
      </ul>
      <div className="container">
        <label htmlFor="location">Choose the Location:</label>
        <select id="location"  name="location" onChange={(e) => setLocation(e.target.value)}>
            <option value="europe">Europe</option>
            <option value="arctic">Arctic</option>
            <option value="sahara">Sahara</option>
            <option value="rainforest">Rainforest</option>
        </select>
        </div>
      <List  filterActivities= {goodWeatherActivities} onDeleteActivity={handleDeleteActivity}/>
  
      <Form handleAddActivity={handleAddActivity} location={location}  />

    </div>
  );
}

export default App;


// {location: 'Europe', temperature: -4, condition: '🌤️', isGoodWeather: true}