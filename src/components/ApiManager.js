
export const sendProperty = (propertyToSend) => {
    const postOptions = {
        method: "POST",
        headers: {"Content-Type": "application/json"}, 
        body: JSON.stringify(propertyToSend)}
    return fetch(`http://localhost:8088/props`, postOptions)
}