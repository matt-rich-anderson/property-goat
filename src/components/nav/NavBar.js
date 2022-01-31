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
               <Link to={"/"}><img src="https://i.imgur.com/FMitkyC.png?1" alt="Property Goat" width="700"/></Link>
            </div>
            <div className ="nav__adds">     
                <Link to="/addproperty"><button className ="nav__add--prop">Add Property</button></Link>
                <Link to="/addnote"><button className ="nav__add--note">Add Note</button></Link>
            </div>
        </div>

    )
}