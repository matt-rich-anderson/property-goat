import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useHistory } from "react-router-dom"
import { getNote } from "../ApiManager"

export const NoteEdit = () => {
    const {noteId} = useParams()
    const [note, setNote] = useState({})
    const [editedMessage, setEditedMessage] = useState("")

    useEffect(() => {
        getNote(noteId).then((data)=>setNote(data))
    },[]
    )

    const history = useHistory()

    const changeMessage = (evt) => {
        evt.preventDefault()
        const copy = note
        copy.message = editedMessage
        fetch(`http://localhost:8088/notes/${noteId}`, {
            method: "PUT",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(copy)
        }).then(() => {history.push(`/property/${note.propId}`)})
    }

    return(
        <>
        <h2>Edit the following Note</h2>
        <div>
            <textarea defaultValue={note.message} onChange={(evt)=>setEditedMessage(evt.target.value)} rows="4" cols="50"/>
        </div>
        <div>
            <button onClick={changeMessage}> Save Note</button>
        </div>
        </>
    )

}