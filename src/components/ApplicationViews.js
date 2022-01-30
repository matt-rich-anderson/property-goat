import React from "react"
import { Route } from "react-router-dom"
import { PropertyForm } from "./properties/PropertyForm"
import { NoteForm } from "./notes/NoteForm"
import { Dashboard } from "./dashboard/Dashboard"

export const ApplicationViews = () => {
    return (
        <>
            <Route exact path="/">
                <Dashboard />
            </Route>
            <Route path="/addproperty">
                <PropertyForm />
            </Route>            
            <Route path="/addnote">
                <NoteForm />
            </Route>
        </>
    )
}