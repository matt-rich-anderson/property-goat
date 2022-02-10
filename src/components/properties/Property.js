import React, { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"
import { deleteNote, deleteProperty, getPropNotesLease } from "../ApiManager"
import "./Property.css"

export const Property = () => {
    const { propertyId } = useParams()
    const [property, setProperty] = useState({})
    
    const history = useHistory()

    useEffect(()=>{
        getPropNotesLease(propertyId).then((data)=>setProperty(data))
    },[propertyId]
    )

    const propertyLease = property.leases?.find((lease) => lease.renterName !== null )

    return(<>
        <section key={property.id}>
            <img src={property.imgUrl} alt="Property Image" width="600" />
            <h2>{property.address}</h2>
            <h3>{property.leases?.length < 1 ? "This Property is Available for Lease" : `Leased to ${propertyLease?.renterName} for $${propertyLease?.rent} mo.`}</h3>
            <p>Square Feet: {property.sqrFoot}</p>
            <p>Bedroom: {property.bedroom}</p>
            <p>Bath: {property.bath}</p>
            <p>Pets Allowed: {property.petsAllowed ? "Yes" : "No"}</p>
            <h4>Owned By {property.ownerName}</h4>
        </section>
        <section>
                <ul>
                    {property.notes?.map((note) => 
                        <li key={note.id} className={note.isUrgent ? "priority" : ""}>🐐 {note.isUrgent ? "PRIORITY: " : ""}{note.message}
                        <Link to={`/property/edit/${note.id}`} ><button className="note__button__edit">Edit Note</button></Link>
                        <button className="note__button__delete" onClick={()=>
                            window.confirm(`Are you sure you want to delete note "${note.message}"?`) === true 
                            ?
                            deleteNote(note.id)
                                .then(() => getPropNotesLease(propertyId))
                                .then((data)=>setProperty(data))
                            :
                            null
                        }>Delete Note</button>
                        </li>
                        )}
                </ul>
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


