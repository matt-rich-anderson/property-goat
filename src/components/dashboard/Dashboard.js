import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { getUserProperty } from "../ApiManager";
import "./Dashboard.css"

export const Dashboard = () => {

    const [userProperties, setUserProperties] = useState({})

    useEffect(() => 
        getUserProperty().then((data) => setUserProperties(data))
        ,[]
    )

    return (
        <>
            <div className="dash">
                {userProperties.props?.map((property) =>
                    <article className="prop__dash" key={property.id}>
                        <div className="prop__img">    
                            <img className="prop__img--details" src={property.imgUrl} alt="Property Image" width="300"/>
                        </div> 
                        <div className="prop__address">
                            <Link to={`/property/${property.id}`} ><h2 className="prop__address--details">{property.address}</h2></Link>
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