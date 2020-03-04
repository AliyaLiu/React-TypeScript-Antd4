import React, {Component} from "react";
import {Link} from "react-router-dom";
import {Location} from 'history';
import Iconfont from "@components/Iconfont";
import styles from "./index.scss";

const config = [
    // {path: "/mall", title: "商城"},
    {path: "/", title: "TS-Demo"},
];

//定义props
interface IProps {
    location: Location;
}
interface IState {
    activePath: string;
}

class Home extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            activePath: props.location.pathname
        };
    }

    handleClick = (path: string): void => {
        this.setState({
            activePath: path
        });
    };

    render() {
        const {activePath} = this.state;
        return (
            <div className={styles.container}>
                <div className={styles.headerInner}>
                    <Link to="/" className={styles.tab}>
                        <Iconfont
                            iconId="logo"
                            className={styles.logo}
                            onClick={() => {
                                this.handleClick("/");
                            }}
                        />
                    </Link>
                    {config.map((item, index) => {
                        const {path, title} = item;
                        const className =
                            activePath.indexOf(path) !== -1
                                ? styles.active
                                : null;
                        return (
                            <Link
                                key={index}
                                to={path}
                                className={`${styles.tab} ${className}`}
                                onClick={() => {
                                    this.handleClick(path);
                                }}>
                                {title}
                            </Link>
                        );
                    })}
                </div>
            </div>
        );
    }
}
export default Home;
