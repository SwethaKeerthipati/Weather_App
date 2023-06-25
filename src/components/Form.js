import React from "react";
import "../styles/Form.css";

export default function Form() {
  return (
    <form className="form">
      <h1>Weather App</h1>
      <label htmlFor="newActivity" className="label-input">
        Add a New Activity
      </label>
      <input type="text" id="newActivity" className="text-input" />
      <div className="checkbox">
        <input type="checkbox" name="typeofWeather" />
        <label htmlFor="good">Good Weather Activity</label>
      </div>
      <button className="button-submit" type="submit">
        Submit
      </button>
    </form>
  );
}
