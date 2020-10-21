import React from "react";
import Button from "@material-ui/core/Button";
import styles from "./scss/TopBar.module.scss";
import Menu from "./Menu";

class TopBar extends React.Component {
	render() {
		return (
			<div className={styles.wrapper}>
				<Menu menuItems={this.props.menuItems} />
				<div className={styles.center}>
					<Button
						variant="contained"
						color="primary"
						onClick={() => this.props.handleChangeFn(-1)}
					>
						&lt;
					</Button>
					<p>{this.props.title}</p>
					<Button
						variant="contained"
						color="primary"
						onClick={() => this.props.handleChangeFn(1)}
					>
						&gt;
					</Button>
				</div>
			</div>
		);
	}
}

export default TopBar;
