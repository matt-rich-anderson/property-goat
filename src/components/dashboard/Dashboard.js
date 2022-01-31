import React, { useEffect, useState } from "react";
import "./Dashboard.css"

export const Dashboard = () => {

    const [userProperties, setUserProperties] = useState({})

    useEffect(() => fetch(`http://localhost:8088/users/${localStorage.getItem("goat_user")}?_embed=props`).then(res => res.json())
                .then((data) => setUserProperties(data)),
        []
    )

    return (
        <>
            <div className="dash">
                {userProperties.props?.map((property) =>
                    <div key={property.id} className="prop__dash" >
                        <div className="prop__img">    
                            <img className="prop__img--details" src={property.imgUrl} alt="Property Image" width="300"/>
                        </div> 
                        <div className="prop__address">
                            <h3 className="prop__address--details">{property.address}</h3>
                        </div>
                        <div className="prop__owner">
                            <p className="prop__owner--details">Owned by {property.ownerName}</p>
                        </div>
                    </div>
                )}
            </div>
        </>
    )


}