import React, {Component} from "react";
import {RouteProps} from 'react-router';
import styles from "./index.scss";
interface State {
    left: number;
}
class Report extends Component<RouteProps, State> {
    private baseLeft: number;

    private raf: ReturnType<typeof requestAnimationFrame> | null;

    constructor(props: RouteProps) {
        super(props);
        this.state = {
            left: 0
        };
        this.baseLeft = 1;
        this.raf = null;
    }

    componentDidMount() {
        this.animationStart();
    }

    animationStart = () => {
        const animation = () => {
            this.setState(
                {
                    left: this.state.left + this.baseLeft
                },
                () => {
                    this.raf = requestAnimationFrame(animation);
                }
            );
        };
        this.raf = requestAnimationFrame(animation);
    };

    render() {
        const {left} = this.state;
        return (
            <div className={styles.container}>
                {/* 学生成绩单
                <div className={styles.swipe} style={{left}} /> */}
            </div>
        );
    }
}

export default Report;
