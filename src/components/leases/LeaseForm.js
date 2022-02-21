import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { getUserProperty, sendLease } from "../ApiManager";
import "./LeaseForm.css";

export const LeaseForm = () => {

    const [userProperties, setUserProperties] = useState({})
    const [newLease, setNewLease] = useState({})

    const history = useHistory()

    useEffect(() => 
    getUserProperty ().then((data) => setUserProperties(data))
    ,[]
)

    const sendNewLease = (evt) => {
        evt.preventDefault()
        sendLease(newLease).then(() => {
            history.push(`/property/${newLease.propId}`)
        })
    }

    return(
        <>
        <div className="lease__form">
            <h2>Create a New Lease</h2>
            <fieldset className="form--lab-field">
                <select className="form-control"onChange={(evt)=>{
                        const copy = {...newLease}
                        copy.propId = parseInt(evt.target.value)
                        setNewLease(copy)
                        }
                    }>
                    <option>Select a Property</option>
                    {userProperties.props?.map( (p) => <option key={p.id} value={p.id}>{p.address}</option>)}
                </select>
                <label>Renter's Name:</label>
                <input type="text" className="form-control" placeholder="Philip Black" onChange={(evt)=>{
                        const copy = {...newLease}
                        copy.renterName = evt.target.value
                        setNewLease(copy)
                        }
                    }/>
                <label>Monthly Rent:</label>
                <input type="number" className="form-control" placeholder="3500" onChange={(evt)=>{
                        const copy = {...newLease}
                        copy.rent = parseInt(evt.target.value)
                        setNewLease(copy)
                        }
                    }/>
                <button onClick={sendNewLease} type="submit">Create Lease</button>
            </fieldset>
        </div>
        </>
    )
}