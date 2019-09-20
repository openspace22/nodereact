import React from 'react'
import {Route, Switch} from 'react-router-dom'
import {Page1, Page2, Page3} from './Pages'

export default function(props){
    return (
        <Switch>
            <Route 
                path='/page1'
                exact
                /**
                 * render,
                 * component,
                 * children
                 */
                render={(props) => {
                    return (
                        <Page1 
                            {...props}
                        />
                    )
                }}
            />
            <Route
                path='/about'
                render={(props) => {
                    return (
                        <AboutPage 
                            {...props}
                        />
                    )
                }}
            />
        </Switch>
    )
}

function AboutPage(props) {
    console.log(props);
    return (
        <Switch>
            <Route 
                exact
                path='/about'
                component={Page2}
            />
            <Route 
                exact
                path='/about/:content-name'
                render={(props) => {
                    return (
                        <Page3 
                            {...props}
                        />
                    )
                }}
            />
        </Switch>
    )
}