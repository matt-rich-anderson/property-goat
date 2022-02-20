import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { getProperties } from "../ApiManager";
import "./Dashboard.css";

export const Dashboard = () => {
  const [userProperties, setUserProperties] = useState([]);
  const [landingMessage, setLandingMessage] = useState("");

  useEffect(
    () =>
      getProperties().then((data) => {
        const properties = data.filter(
          (p) => p.userId === parseInt(localStorage.getItem("goat_user"))
        );
        setUserProperties(properties);
      }),
    []
  );

  useEffect(() => {
    if (userProperties < 1) {
      setLandingMessage(
        `Please Click "Add Properties" to Create Your First Property Card`
      );
    } else {
      setLandingMessage(`Click on a Property Card to See Details`);
    }
  }, [userProperties]);

  return (
    <>
      <div>
        <h2>{landingMessage}</h2>
      </div>
      <div className="dash">
        {userProperties.map((property) => (
          <Link key={property.id} to={`/property/${property.id}`}>
            <article className="prop__dash">
              <div className="prop__img">
                <img
                  className="prop__img--details"
                  src={property.imgUrl}
                  alt="Property Image"
                  width="300"
                />
              </div>
              <div className="prop__address">
                <h3 className="prop__address--details">{property.address}</h3>
              </div>
              <div className="prop__owner">
                <p className="prop__owner--details">
                  Owned by {property.ownerName}
                </p>
              </div>
              <div className="prop__lease">
                <p className={property.leases.length < 1 ? "prop__lease--det--Avail" : "prop__lease--det--Leased"}>
                  {property.leases.length < 1 ? "AVAILABLE" : "Leased"}
                </p>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </>
  );
};
