import React, { useEffect, useState } from "react";
import { getUserProperty } from "../ApiManager";

export const LeaseForm = () => {

    const [userProperties, setUserProperties] = useState({})

    useEffect(() => 
    getUserProperty ().then((data) => setUserProperties(data))
    ,[]
)

    return(
        <>
            <h2>Create a New Lease</h2>
            <fieldset className="form--lab-field">
                <select>
                    <option>Select a Property</option>
                    {userProperties.props?.map( (p) => <option key={p.id} value={p.id}>{p.address}</option>)}
                </select>
                <label>Renter's Name:</label>
                <input type="text" className="form-control" placeholder="Philip Black"/>
                <label>Monthly Rent:</label>
                <input type="number" className="form-control" placeholder="3500"/>
                <button>Create Lease</button>
            </fieldset>
        </>
    )
}