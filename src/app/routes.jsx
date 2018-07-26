import React from "react";
import { Switch, Route } from "react-router-dom";
import NotFound from "./components/util/NotFound";
import BreadCrumb from "./BreadCrumb";
import routesConfig from "./routes.config";

const yearStart = 2018;
const yearNow = new Date().getFullYear();
const config = routesConfig;

function renderRoute() {
    return _.map(config, (route, index) => {                
        return (            
            <Route exact {...route} key={index} />
        )
    })
}

export default (
    <div className="wrapper-all">
        <div className="content">
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary sticky-top shadow">

                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <a href="/" className="navbar-brand">
                            <img src="/assets/images/plus-one-logo.png" width="64" height="64" />
                        </a>
                    </li>
                </ul>
            </nav>

            <div className="container my-4">
               
                <div className="row">
                    <div className="col">
                        <Switch>                            
                            {renderRoute()}
                            <Route component={NotFound} />
                        </Switch>
                    </div>
                </div>
            </div>
        </div>

        <footer className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="collapse navbar-collapse col-12 d-flex navbar-text justify-content-center">
                <strong>&copy; PLUSONE {yearStart === yearNow ? yearStart : `${yearStart} - ${yearNow}`}</strong>
            </div>
        </footer>
    </div>
)