import React from "react";
import {Link} from "react-router-dom";
import styles from "./index.scss";
const list = [
    {
        id: 1,
        title: "语文"
    },
    {
        id: 2,
        title: "数学"
    },
    {
        id: 3,
        title: "英语"
    },
    {
        id: 4,
        title: "化学"
    }
];
const Mall = () => <div className={styles.container}>
    <ul>
        {list.map(item => {
            const {title, id} = item;
            return <li key={id}>
                <Link
                    to={`/mall/product/${id}`}
                    className={styles.linkInner}>
                    <h2>{title}</h2>
                </Link>
            </li>;
        })}
    </ul>
</div>;
export default Mall;
