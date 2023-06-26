import React, { useState, useEffect } from "react";
import Form from "./components/Form";
import { v4 as uuidv4 } from "uuid";
import List from "./components/List";
import useLocalStorageState from "use-local-storage-state";

function App() {
  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: [],
  });

  const [weather, setWeather] = useState();
  const [location, setLocation] = useLocalStorageState("location", {
    defaultValue: "europe",
  });

  const fetchWeather = async () => {
    try {
      const response = await fetch(
        `https://example-apis.vercel.app/api/weather/${location}`
      );

      const data = await response.json();
      console.log("data", data);
      setWeather(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchWeather();
  }, [location]);

  useEffect(() => {
    const interval = setInterval(fetchWeather, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [location]);

  function handleAddActivity(newActivity) {
    setActivities([...activities, { id: uuidv4(), ...newActivity }]);
  }

  function handleDeleteActivity(num) {
    setActivities((activities) =>
      activities.filter((activity) => activity.id !== num)
    );
  }

  let goodWeatherActivities = activities.filter(
    (activity) => activity?.isForGoodWeather === weather?.isGoodWeather
  );

  return (
    <div>
      <h1>Weather App</h1>
      <h2>Welcome to {location}</h2>
      <div>
        {weather && (
          <div className="Weather-info">
            <span className="emoji">{weather.condition}</span>
            <span>
              {weather.temperature}°
              <span className="degree">
                <strong>C</strong>
              </span>
            </span>
          </div>
        )}
      </div>
      <div className="container">
        <label htmlFor="location">
          <strong>Choose the Location:</strong>
        </label>
        <select
          id="location"
          name="location"
          onChange={(e) => setLocation(e.target.value)}
        >
          <option value="europe">Europe</option>
          <option value="arctic">Arctic</option>
          <option value="sahara">Sahara</option>
          <option value="rainforest">Rainforest</option>
        </select>
      </div>

      <List
        filterActivities={goodWeatherActivities}
        onDeleteActivity={handleDeleteActivity}
        isGoodWeather={weather?.isGoodWeather}
      />
      <Form handleAddActivity={handleAddActivity} location={location} />
    </div>
  );
}

export default App;
