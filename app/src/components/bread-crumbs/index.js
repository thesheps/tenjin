import { html } from "https://unpkg.com/lit?module";
import { state } from "../../state/index.js";
import styles from "../../styles/styles.js";
import ConnectedElement from "../connected-element/index.js";

class BreadCrumbs extends ConnectedElement {
	static styles = styles;

	render() {
		const selectedBranch = state.branch
			? html` |
					<a href="/${state.repo}/${state.branch}">${state.branch}</a>`
			: html``;

		const selectedFile = state.file ? html` | ${state.file}` : html``;

		return html`<h3 id="bread-crumbs">
			<a href="/${state.repo}">${state.repo}</a>${selectedBranch}${selectedFile}
			<hr />
		</h3>`;
	}
}

customElements.define("bread-crumbs", BreadCrumbs);
