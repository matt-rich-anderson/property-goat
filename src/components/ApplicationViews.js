import React from "react"
import { Route } from "react-router-dom"
import { PropertyForm } from "./properties/PropertyForm"
import { Dashboard } from "./dashboard/Dashboard"
import { Property } from "./properties/Property"
import { TestAgain } from "./TestAgain"

export const ApplicationViews = () => {
    return (
        <>
            <Route exact path="/">
                <Dashboard />
            </Route>
            <Route exact path="/property/:propertyId(\d+)">
                <Property />
            </Route>
            <Route path="/addproperty">
                <PropertyForm />
            </Route>            
            <Route path="/addnote">
                <TestAgain />
            </Route>
        </> 
    )
}