import { html } from "https://unpkg.com/lit?module";
import { state } from "../../state/index.js";
import getBranches from "./get-branches.js";
import styles from "../../styles/styles.js";
import ConnectedElement from "../connected-element/index.js";

class RepoViewer extends ConnectedElement {
	static styles = styles;

	static get properties() {
		return {
			branches: { type: Array, state: true },
			files: { type: Array, state: true },
		};
	}

	async onBeforeEnter(location) {
		const urlParts = window.location.host.split(".");
		const sub = window.location.host.split(".")[0];

		state.account = sub === "www" || urlParts.length === 1 ? "" : sub;
		state.repo = location.params["repo"];

		this.branches = await getBranches(state.account, state.repo);
	}

	render() {
		const branches = this.branches.map(
			(b) =>
				html`<option
					selected="${b.name === "main" || b.name === "master"}"
					value="${b.name}"
				>
					${b.name}
				</option>`
		);

		return html`<div id="repo-viewer">
			<h3>
				${this.repo}
				<hr />
			</h3>

			<label for="branch">Branches</label>
			<select id="branches" required>
				<option value="">Select a Branch...</option>
				${branches}
			</select>
		</div>`;
	}
}

customElements.define("repo-viewer", RepoViewer);
