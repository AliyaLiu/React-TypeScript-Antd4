import React, {Component} from "react";
import styles from './index.scss';

//定义props
interface Props {
  iconId: string;
  className?: string;
  onClick?(): void;
  useSvg?: boolean;
  global?: boolean;
  style?: object;
  children?:object;
}

export default class Iconfont extends Component<Props> {
	constructor(props:Props) {
		super(props);
		if (props.global) {
			require("https://static.leke.cn/styles/common/iconfont/iconfont.css");
			return;
		}
		require("./source/iconfont.js");
	}

	render() {
		const {className, iconId, useSvg,global,style,onClick,children} = this.props;
		return !global ? (
			<svg
				style={style}
				className={`${styles.icon} ${className}`}
				aria-hidden="true"
				onClick={onClick}>
				<use xlinkHref={"#icon-" + iconId} />
				{children}
			</svg>
		) : (
			<i
				className={`iconfont icon-${iconId} ${className}`}
				onClick={onClick}
				style={style}
			/>
		);
	}
}
