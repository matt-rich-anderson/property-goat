import React, { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { sendProperty } from "../ApiManager";

export const PropertyForm = () => {
   const [createdProperty, setCreatedProperty] = useState(
        {
           userId: parseInt(localStorage.getItem("goat_user"))
        }
    )
    
    const history = useHistory()

    const sendCreatedProperty = (evt) => {

        evt.preventDefault()
            
        const objectToSend = 
            {
                address: createdProperty.address,
                bedroom: createdProperty.bedroom,
                bath: createdProperty.bath,
                sqrFoot: createdProperty.sqrFoot,
                petsAllowed: createdProperty.petsAllowed,
                ownerName: createdProperty.ownerName,
                userId: createdProperty.userId,
                imgUrl: createdProperty.imgUrl
            }
    
        sendProperty(objectToSend).then(() => {
            history.push("/")
        })
    
    }

    console.log(JSON.parse("true"))
    
    return (
    <>
    <h2>Create a New Property</h2>
        <form className="form--login">
            <fieldset>
                <label htmlFor="address">Address </label>
                <input onChange={(evt)=>{
                    const copy = {...createdProperty}
                    copy.address = evt.target.value
                    setCreatedProperty(copy)
                    }
                }
                type="text" id="address" className="form-control" placeholder="4408 Goat Parkway"/>
            </fieldset>
            <fieldset>
                <label htmlFor="footage">Number of Square Feet</label>
                <input onChange={(evt)=>{
                    const copy = {...createdProperty}
                    copy.sqrFoot = parseInt(evt.target.value)
                    setCreatedProperty(copy)
                    }
                }
                type="number" id="footage" className="form-control" placeholder="3000"/>
            </fieldset>
            <fieldset>
                <label htmlFor="bedroom">Number of Bedrooms </label>
                <input onChange={(evt)=>{
                    const copy = {...createdProperty}
                    copy.bedroom = parseInt(evt.target.value)
                    setCreatedProperty(copy)
                    }
                }
                type="number" id="bedroom" className="form-control" placeholder="1, 2, 3 etc."/>
            </fieldset>
            <fieldset>
                <label htmlFor="bath">Number of Bath</label>
                <input onChange={(evt)=>{
                    const copy = {...createdProperty}
                    copy.bath = parseInt(evt.target.value)
                    setCreatedProperty(copy)
                    }
                }
                type="number" id="bath" className="form-control" placeholder="1, 2, 3 etc."/>
            </fieldset>
            <fieldset>
                <label htmlFor="pets">Are Pets Allowed</label>
                <select onChange={(evt)=>{
                    const copy = {...createdProperty}
                    copy.petsAllowed = JSON.parse(evt.target.value)
                    setCreatedProperty(copy)
                    }
                }
                name="pets" id="pets" className="form-control">
                    <option>Select "Yes" or "No"</option>
                    <option value={true}>Yes</option>
                    <option value={false}>No</option>
                </select>
            </fieldset>
            <fieldset>
                <label htmlFor="owner">Owner Name</label>
                <input onChange={(evt)=>{
                    const copy = {...createdProperty}
                    copy.ownerName = evt.target.value
                    setCreatedProperty(copy)
                    }
                }
                type="text" id="address" className="form-control" placeholder="Philip Black"/>
            </fieldset>
            <fieldset>
                <label htmlFor="img">Image URL</label>
                <input onChange={(evt)=>{
                    const copy = {...createdProperty}
                    copy.imgUrl = evt.target.value
                    setCreatedProperty(copy)
                    }
                }
                type="text" id="img" className="form-control" placeholder="https://YourImage.com/"/>
            </fieldset>        
            <fieldset>
                <button onClick={sendCreatedProperty} type="submit"> Create Property </button>
            </fieldset>
        </form>
        </>
        )

}