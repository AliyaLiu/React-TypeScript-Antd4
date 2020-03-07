import React, {Component} from "react";
import {Route, Switch} from "react-router-dom";
import {withRouter} from "react-router";
//
// import Header from "@components/Header";
import {routerConfig} from "@routers/router.config";
import RouterProps from '@routers/type';
//style
// import styles from "./index.scss";

class Main extends Component<RouterProps> {
    render() {
        return (
            <>
                <Switch>
                    {routerConfig.map((item, index) => {
                        const {path, component, exact} = item;
                        return (
                            <Route
                                key={index}
                                path={path}
                                component={component}
                                exact={exact}
                            />
                        );
                    })}
                </Switch>
            </>
        );
    }
}

export default withRouter(Main);
