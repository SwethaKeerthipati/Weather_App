//  function Location(onLocation){
//     return(
//         <div className="container">
//         <label htmlFor="location">Choose the Location:</label>
//         <select id="location" value={onLocation} name="location">
//             <option value="europe">Europe</option>
//             <option value="arctic">Arctic</option>
//             <option value="sahara">Sahara</option>
//             <option value="rainforest">Rainforest</option>
//         </select>
//         </div>
//     )
// }

// export default Location;
// import { useState } from "react";

const [location, setLocation] = useState();

function Location({location , setLocation}){
    return(
        <div className="container">
        <label htmlFor="location">Choose the Location:</label>
        <select id="location" value={location}  name="location">
            <option value="europe">Europe</option>
            <option value="arctic">Arctic</option>
            <option value="sahara">Sahara</option>
            <option value="rainforest">Rainforest</option>
        </select>
        </div>
    )
}

export default Location;

