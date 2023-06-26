import React from "react";

import "../styles/Form.css";

export default function Form({ handleAddActivity }) {
  function handleSubmit(e) {
    e.preventDefault();
    const formData = {
      name: e.target.newActivity.value,
      // console.log(name);
      isForGoodWeather: e.target.typeofWeather.checked,
      // console.log(isGoodWeather);
    };

    //Resetting the form and focusing on the new activity input
    e.target.reset();
    e.target.newActivity.focus();
    // console.log(formData);
 
    return handleAddActivity(formData);

  }
  return (
    <form onSubmit={handleSubmit} className="form">
      
      <label htmlFor="newActivity" className="label-input">
        Add a New Activity
      </label>
      <input
        type="text"
        id="newActivity"
        className="textInput"
        name="newActivity"
      />
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
