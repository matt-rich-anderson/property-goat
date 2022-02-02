import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"
import { getUserProperty, sendNote } from "../ApiManager"
import "./NoteForm.css"

export const NoteForm = () => {

    const [userProperties, setUserProperties] = useState({})
    const [noteObject, setNoteObject] = useState({})

    const history = useHistory()

    useEffect(() => 
        getUserProperty ().then((data) => setUserProperties(data))
        ,[]
    )

    const sendCreatedNote = (evt) => {
        evt.preventDefault()
        sendNote(noteObject).then(() => {
            history.push("/")
        })
    }

    return(
        <>
            <h2>Select a Property for your Note</h2>

            <fieldset>
                <select onChange={(evt)=>{
                    const copy = {...noteObject}
                    copy.propId = parseInt(evt.target.value)
                    setNoteObject(copy)
                    }
                }
                className="form-control">
                    <option>Select Property</option>
                    {userProperties.props?.map((p)=><option key={p.id} value={p.id}>{p.address}</option>)}
                </select>
            </fieldset>

            <fieldset className="form--lab-field">
                <label>Message:</label>
                <input type="text" className="form-control" placeholder="Replace Counter Tops ASAP" onChange={(evt)=>{
                    const copy = {...noteObject}
                    copy.message = evt.target.value
                    setNoteObject(copy)
                    }
                }/>
                <input type="checkbox" onChange={(evt) => {
                    const copy = {...noteObject}
                    copy.isUrgent = evt.target.checked
                    setNoteObject(copy)
                    }
                }/>
                <label>Is this message Priority?</label>
            </fieldset>

            <fieldset>
                <button onClick={sendCreatedNote} type="submit">Create Property</button>
            </fieldset>

        </>
    )

}
