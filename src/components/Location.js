 function Location({location , setLocation}){
    return(
        <div className="container">
        <label htmlFor="location">Choose the Location:</label>
        <select id="location" value={location} onChange={(e) => setLocation(e.target.value)} name="location">
            <option value="europe">Europe</option>
            <option value="arctic">Arctic</option>
            <option value="sahara">Sahara</option>
            <option value="rainforest">Rainforest</option>
        </select>
        </div>
    )
}

export default Location;
