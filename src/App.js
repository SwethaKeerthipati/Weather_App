import React from "react";
import Form from "./components/Form";
import { useState ,useEffect ,  } from "react";
import { v4 as uuidv4 } from "uuid";
import List from "./components/List";
import useLocalStorageState from "use-local-storage-state";


function App() {
  let [activities, setActivities] = useLocalStorageState("activities", { defaultValue: []});
  
  const [weather, setWeather] = useState();

  useEffect(() => {
    async function fetchWeather() {
      try {
        const response = await fetch(
          "https://example-apis.vercel.app/api/weather/rainforest"
        );
        
        const data = await response.json();
        setWeather(data);
      //  console.log(data);
        
      } catch (error) {
        console.log(error);
      }
    }

    fetchWeather(); 
  },[]);
 


console.log(weather);






  function handleAddActivity(newActivity) {
    setActivities([...activities,{id:uuidv4(),...newActivity}]);
    
  }



function handleDeleteActivity(num) {
  setActivities(activities => {
    const updatedActivities = activities.filter(activity => activity.id !== num);
    return updatedActivities;
  });
}




  
 let goodWeatherActivities = activities.filter((activity) => activity.isForGoodWeather === weather.isGoodWeather )
//  let badWeatherActivities = activities.filter((activity) => activity.isForGoodWeather === !weather.isGoodWeather)
   


if (!weather){
  return
}


  return (
    <div>
      <h1>Weather App</h1>
      <ul>
        <ol>{weather?.condition}</ol>
        <ol>{weather?.temperature}</ol>
        
      </ul>
      <List  filterActivities= {goodWeatherActivities} onDeleteActivity={handleDeleteActivity}/>
      <Form handleAddActivity={handleAddActivity}   />
    </div>
  );
}

export default App;




// {location: 'Europe', temperature: -4, condition: '🌤️', isGoodWeather: true}