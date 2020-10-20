import React from "react";
import styles from "./scss/Menu.module.scss";

class Burger extends React.Component {
	state = {
		active: false,
	};

	handleToggle = () => {
		this.setState({ active: !this.state.active });
	};

	render() {
		return (
			<button
				className={
					this.state.active
						? styles.burgerActive
						: styles.burgerWrapper
				}
				onClick={this.handleToggle}
			>
				<span className={styles.burgerBox}>
					<span className={styles.burgerInner}></span>
				</span>
			</button>
		);
	}
}

export default Burger;
