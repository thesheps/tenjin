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
		state.repo = location.params["repo"];

		if (!state.account || !state.accessToken) window.location.href = "/";

		this.branches = await getBranches(
			state.account,
			state.repo,
			state.accessToken
		);
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

		return html`<div>
			<div id="repo-viewer">
				<h3>
					${state.repo}
					<hr />
				</h3>

				<label for="branch">Branches</label>
				<select id="branches" required>
					<option value="">Select a Branch...</option>
					${branches}
				</select>
			</div>
		</div>`;
	}
}

customElements.define("repo-viewer", RepoViewer);
