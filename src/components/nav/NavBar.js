import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"

export const NavBar = () => {
    
    return (

        <div className="nav">       
            <div className ="nav__logout" >
                <Link className="navbar__logout--link" to="#" onClick={() => localStorage.removeItem("goat_user")}>Logout</Link>
            </div>    
            <div className ="nav__brand">   
                <h1>PROPERTY GOAT</h1>
            </div>
            <div className ="nav__adds">     
                <p className ="nav__add--prop">Add Property</p>
                <p className ="nav__add--note">Add Note</p>
            </div>
        </div>

    )
}