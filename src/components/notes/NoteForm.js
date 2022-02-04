import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"
import { getUserProperty, sendNote } from "../ApiManager"
import "./NoteForm.css"

export const NoteForm = () => {

    const [userProperties, setUserProperties] = useState({})
    const [messageObject, setMessageObject] = useState({})
    const [selectedProps, setselectedProps] = useState([])

    const history = useHistory()

    useEffect(() => 
        getUserProperty ().then((data) => setUserProperties(data))
        ,[]
    )

    const sendCreatedNote = (evt) => {
        evt.preventDefault()

        selectedProps.map( (idNum) => {
            const completeObj = messageObject
            completeObj.propId = idNum
            sendNote(completeObj).then(() => {
                if (selectedProps.length === 1){
                    history.push(`/property/${completeObj.propId}`)
                }
                else {
                    history.push(`/`)
                }
            }
            )
        }
        )
    }

    const propertyChooser = (evt) => {
        let arraycopy = [...selectedProps]
        if(selectedProps.includes(parseInt(evt.target.value))) {
            arraycopy = arraycopy.filter((id) => id !== parseInt(evt.target.value))
            setselectedProps(arraycopy)
        }
        else {
            arraycopy.push(parseInt(evt.target.value))
            setselectedProps(arraycopy)
        }
    }

    return(
        <>
            <div className="note__form">
                <h2>Select a Property for your Note</h2>

                <fieldset>
                    {userProperties.props?.map((p) =>
                        <div key={p.id}> 
                            <input type="checkbox" value={p.id} onChange={propertyChooser}/>
                            <label>{p.address}</label>
                        </div>
                        )}
                </fieldset>

                <fieldset className="form--lab-field">
                    <label>Message:</label>
                    <input type="text" className="form-control" placeholder="Replace Countertops ASAP" onChange={(evt)=>{
                        const copy = {...messageObject}
                        copy.message = evt.target.value
                        setMessageObject(copy)
                        }
                    }/>
                    <input type="checkbox" onChange={(evt) => {
                        const copy = {...messageObject}
                        copy.isUrgent = evt.target.checked
                        setMessageObject(copy)
                        }
                    }/>
                    <label>Is this message Priority?</label>
                </fieldset>

                <fieldset>
                    <button onClick={sendCreatedNote} type="submit">Create Note</button>
                </fieldset>
            </div>        
        </>
    )

}