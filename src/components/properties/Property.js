import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"
import { deleteProperty, getProperty } from "../ApiManager"

export const Property = () => {
    const { propertyId } = useParams()
    const [property, setProperty] = useState({})
    
    const history = useHistory()

    useEffect(()=>{
        getProperty(propertyId).then((data)=>setProperty(data))
    }
        ,[propertyId]
    )

    return(<>
        <section key={property.id}>
            <img src={property.imgUrl} alt="Property Image" width="600" />
            <h2>{property.address}</h2>
            <p>Square Feet: {property.sqrFoot}</p>
            <p>Bedroom: {property.bedroom}</p>
            <p>Bath: {property.bath}</p>
            <p>Pets Allowed: {property.petsAllowed ? "Yes" : "No"}</p>
            <h4>Owned By {property.ownerName}</h4>
        </section>
        <section>
            <button type="button" onClick={()=>
                window.confirm(`Are you sure you want to delete ${property.address}, owned by${property.ownerName}?`) === true 
                ?
                deleteProperty(property.id).then(() => history.push("/"))
                :
                null
            }>Delete Property</button>
        </section>
    </>)
} 


