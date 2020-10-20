import React from "react";
import styles from "./scss/Menu.module.scss";
import Burger from "./Burger";

class Menu extends React.Component {
	render() {
		return (
			<div>
				<Burger />
				<nav className={styles.nav}>
					<ul className={styles.list}>
						{this.props.menuItems.map((item) => (item))}
					</ul>
				</nav>
			</div>
		);
	}
}

export default Menu;
