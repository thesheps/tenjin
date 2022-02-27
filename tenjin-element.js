import { css, LitElement } from "https://unpkg.com/lit?module";
import styles from "../styles.js";

export default class TenjinElement extends LitElement {
	static styles = [
		styles,
		css`
			:root {
				color: "--primary: #5e35b1;";
			}
		`,
	];
}
