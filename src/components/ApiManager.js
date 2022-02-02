export const getUserProperty = () =>
    fetch(`http://localhost:8088/users/${localStorage.getItem("goat_user")}?_embed=props`)
        .then(res => res.json())

export const getProperty = (id) =>
    fetch(`http://localhost:8088/props/${id}/?_embed=notes`)
        .then(res => res.json())

export const sendProperty = (propertyToSend) => {
    const postOptions = {
        method: "POST",
        headers: {"Content-Type": "application/json"}, 
        body: JSON.stringify(propertyToSend)}
    return fetch(`http://localhost:8088/props`, postOptions)
    }

export const sendNote = (noteToSend) => {
    const postOptions = {
        method: "POST",
        headers: {"Content-Type": "application/json"}, 
        body: JSON.stringify(noteToSend)}
    return fetch(`http://localhost:8088/notes`, postOptions)
    }

export const deleteProperty = (id) => {
    return fetch(`http://localhost:8088/props/${id}`,
        {method: "DELETE"})
}