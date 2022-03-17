import { html } from "https://unpkg.com/lit?module";
import { state } from "../../state/index.js";
import styles from "../../styles/styles.js";
import getBranches from "./get-branches.js";
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
		state.file = "";
		state.repo = location.params["repo"];
		state.branch = location.params["branch"];

		if (!state.account || !state.accessToken) window.location.href = "/";

		this.branches = await getBranches(
			state.account,
			state.repo,
			state.accessToken
		);
	}

	async handleBranchChange(e) {
		window.location.href = `/${state.repo}/${e.target.value}`;
	}

	getBranchSelector() {
		const branches = this.branches.map(
			(b) => html`<option value="${b.name}">${b.name}</option>`
		);

		return html`<label for="branch">Branches</label>
			<select id="branches" required @change="${this.handleBranchChange}">
				<option value="">Select a Branch...</option>
				${branches}
			</select>`;
	}

	render() {
		return html`<div>
			<div id="repo-viewer">
				<bread-crumbs></bread-crumbs>
				${(!state.branch && this.getBranchSelector()) || ""}
				${state.branch && html`<file-lister></file-lister>`}
			</div>
		</div>`;
	}
}

customElements.define("repo-viewer", RepoViewer);
