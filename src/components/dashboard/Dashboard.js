import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { getUserProperty } from "../ApiManager";
import "./Dashboard.css"

export const Dashboard = () => {

    const [userProperties, setUserProperties] = useState({})
    const [landingMessage, setLandingMessage] = useState("")

    useEffect(() => 
        getUserProperty()
        .then((data) => setUserProperties(data))
        ,[]
    )

    useEffect(() =>  {
        if(userProperties.props < 1){setLandingMessage(`Please Click "Add Properties" to Create Your First Property Card`)}
        else{setLandingMessage(`Click on a Property Card to See Details`)}

    }
    ,[userProperties]
)


    return (
        <>
            <div>
                <h2>{landingMessage}</h2>
            </div>
            <div className="dash">
                {userProperties.props?.map((property) =>
                    <article className="prop__dash" key={property.id}>
                        <div className="prop__img">    
                            <img className="prop__img--details" src={property.imgUrl} alt="Property Image" width="300"/>
                        </div> 
                        <div className="prop__address">
                            <Link to={`/property/${property.id}`} ><h3 className="prop__address--details">{property.address}</h3></Link>
                        </div>
                        <div className="prop__owner">
                            <p className="prop__owner--details">Owned by {property.ownerName}</p>
                        </div>
                    </article>
                )}
            </div>
        </>
    )


}
