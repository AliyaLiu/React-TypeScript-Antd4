import React, {Component} from "react";
import {History} from 'history';
import Iconfont from "@components/Iconfont";
import RouterProps from '@routers/type';
import styles from "./index.scss";

interface Props extends RouterProps {
    history: History;
}
class ProductDetail extends Component<Props> {
    handleClick = () => {
        if (this.props.history.length <= 2) {
            //当前没有历史记录
            this.props.history.push({
                pathname: "/mall",
                state: {fromProductDetail: true}
            });
            return;
        }
        this.props.history.goBack();
    };

    render() {
        return (
            <div className={styles.container}>
                <div className={styles.icon}>
                    <Iconfont iconId="back" onClick={this.handleClick} />
                </div>
                商品ID:<i>{this.props.match.params.id}</i>
            </div>
        );
    }
}

export default ProductDetail;
