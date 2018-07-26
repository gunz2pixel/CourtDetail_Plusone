import React, { Component } from "react";
import { withRouter } from "react-router"
import routesConfig from "./routes.config";


class BreadCrumb extends Component {
    constructor() {
        super();
        this.state = {
            route: ""
        }
    }

    componentWillUpdate() {
        const currentRoute = _.find(routesConfig, route => route.rawPath.indexOf(this.props.location.pathname) > -1);
        console.log(currentRoute);
    }

    render() {       
        
        
        return <span>This is Bread crumb</span>
    }
}

export default withRouter(BreadCrumb);