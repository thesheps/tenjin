import { css } from "https://unpkg.com/lit?module";
import styles from "./pico-bootstrap-grid.min.css" assert { type: "css" };

export default [
	styles,
	css`
		a {
			color: lightGray;
		}

		a:hover {
			color: white;
		}
	`,
];
