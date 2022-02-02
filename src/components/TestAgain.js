import React, { useEffect, useState } from "react"
import { getUserProperty } from "./ApiManager"

export const TestAgain = () => {

    const [userProperties, setUserProperties] = useState({})

    useEffect(() => 
        getUserProperty ().then((data) => setUserProperties(data))
        ,[]
    )



    return(
        <>
            <h2>Select a Property for your Note</h2>
            <ul>
                {userProperties.props?.map( (property) => {
                    return <li key={property.id}>
                        <input type="checkbox"/>
                        <label>{property.address}</label>
                    </li>
                }
                )}
            </ul>
            
        </>
    )

}

{/* <select name="cars" id="cars">
<option>Select a Property</option>
{userProperties.props?.map((property)=>{
return <option key={property.id} value={property.id} >{property.address}</option>
}
)}
</select> */}