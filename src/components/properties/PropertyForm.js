import React, { useState } from "react";

export const PropertyForm = () => {
   
   
   return (<>
    <h2>Create a New Property</h2>
    <form className="form--login">
        <fieldset>
            <label htmlFor="address">Address </label>
            <input type="text" id="address" className="form-control" placeholder="4408 Goat Parkway"/>
        </fieldset>
        <fieldset>
            <label htmlFor="bedroom">Number of Bedrooms </label>
            <input type="number" id="bedroom" className="form-control" placeholder="1"/>
        </fieldset>
        <fieldset>
            <label htmlFor="bath">Number of Bath</label>
            <input type="number" id="bath" className="form-control" placeholder="1"/>
        </fieldset>
        <fieldset>
            <label htmlFor="pets">Are Pets Allowed</label>
            <select name="pets" id="pets" className="form-control">
                <option value="volvo">Select "Yes" or "No"</option>
                <option value={true}>Yes</option>
                <option value={false}>No</option>
            </select>
        </fieldset>
        <fieldset>
            <label htmlFor="owner">Owner Name</label>
            <input type="text" id="address" className="form-control" placeholder="Philip Black"/>
        </fieldset>
        <fieldset>
            <label htmlFor="img">Image URL</label>
            <input type="text" id="img" className="form-control" placeholder="https://YourImage.com/"/>
        </fieldset>        
        <fieldset>
            <button type="submit"> Register </button>
        </fieldset>
    </form>
    </>)

}