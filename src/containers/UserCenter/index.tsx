import React, {Component} from "react";
import { Link } from "react-router-dom";
// import {Switch, Route, Link} from "react-router-dom";
import styles from "./index.scss";
interface Props {
    match: {
        url: string;
    };
    location: {
        pathname: string;
    };
}
interface State {
    active: string;
}
interface LinkList {
    to: string;
    title: string;
}
class UserCenter extends Component<Props, State> {
    private linkList: LinkList[];

    constructor(props: Props) {
        super(props);
        const {match} = props;
        this.linkList = [
            {to: `${match.url}/report`, title: "成绩单"},
            {to: `${match.url}/transcript`, title: "分析报告"}
        ];
        let pathname = this.filterFatherPath(props.location.pathname);
        this.state = {
            active: pathname || this.linkList[0].to
        };
    }

    componentWillReceiveProps(nextProps: Props) {
        if (nextProps.location.pathname !== this.props.location.pathname) {
            let pathname = this.filterFatherPath(nextProps.location.pathname);
            this.setState({
                active: pathname || this.linkList[0].to
            });
        }
    }

    filterFatherPath = (pathname: string) => {
        return pathname === "/usercenter" ? "" : pathname;
    };

    handleClick = (active: string) => {
        this.setState({
            active
        });
    };

    render() {
        const {active} = this.state;
        return (
            <div className={`${styles.container}`}>
                <ul>
                    {this.linkList.map(item => <li key={item.to}>
                        <Link
                            to={item.to}
                            className={`${styles.link} ${active === item.to ? styles.active : ""}`}
                            onClick={() => {
                                this.handleClick(item.to);
                            }}>
                            {item.title}
                        </Link>
                    </li>)}
                </ul>
            </div>
        );
    }
}
export default UserCenter;
