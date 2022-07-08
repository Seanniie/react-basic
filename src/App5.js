import React from "react";
import Navbar from "./components/Navbar";
import routes from "./routes";
import {

    BrowserRouter as Router,
    Switch,
    Route
    
} from 'react-router-dom';


function App5(){

    return(
        <Router>
            <div className="App">
                <Navbar></Navbar>
                <div className="container">
                    <Switch>
                        {routes.map(route =>{
                            return(
                                <Route key = {route.path} path = {route.path} exact>
                                    <route.component></route.component>
                                </Route>
                            )
                        })}
                    </Switch>
                </div>
            </div>
        </Router>
    );
}

export default App5;