import React, {Component} from "react";
import {Link} from 'react-router-dom';
import {Button, Card, Row, Col} from "antd";
import moment from "moment";
import {connect} from "react-redux";
import {bindActionCreators, Dispatch, AnyAction} from "redux";
import Iconfont from "@components/Iconfont";
import Middleware from "@store/root/middleware";
import RootState, {UserInfo} from '@store/root/type';
import ReduxState from '@store/type';
import styles from "./index.scss";

interface Props {
    root: RootState; //来自于redux中的state
    setNormal(): void;
    signin(userInfo: UserInfo): void;
    handleClick: () => void;
}
const mapStateToProps = ({root}: ReduxState) => ({
    root: root
});
const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => bindActionCreators({
    setNormal: () => Middleware.setNormal(),
    signin: userInfo => Middleware.signin(userInfo)
}, dispatch);

class Home extends Component<Props> {

    handleClick = () => {
        this.props.setNormal();
    };

    handleSign = () => {
        this.props.signin({
            userName: "用户23",
            userId: 23,
            content: "这是一段用户简介"
        });
    };

    render() {
        const {
            title,
            isNormal,
            isSignin,
            successful,
            userInfo
        } = this.props.root;
        return (
            <div className={styles.container}>
                {/* <Iconfont iconId='global-save' global/>
                <Row>
                    <Col span={6}>col-6</Col>
                    <Col span={6}>col-6</Col>
                    <Col span={6}>col-6</Col>
                    <Col span={6}>col-6</Col>
                </Row>
                <Button type="primary" onClick={this.handleClick}>
                    {title}
                </Button>
                {isNormal && <Button
                    type={successful ? "primary" : "default"}
                    onClick={this.handleSign}
                    disabled={!!successful}
                    className={styles.btn}>
                    {isSignin ? "拼命登录中..." : successful ? "登录成功" : "登录"}
                </Button>}
                {userInfo && <Card
                    title={userInfo.userName}
                    extra={<Link to="#">More</Link>}
                    style={{width: 300}}>
                    <p>{userInfo.content}</p>
                    <p>{userInfo.content}</p>
                    <p>{userInfo.content}</p>
                </Card>}
                <div>{moment().format("YYYY-MM-DD HH:mm:ss")}</div> */}
            </div>
        );
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);
