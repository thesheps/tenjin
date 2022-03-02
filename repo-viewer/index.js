import { html } from "https://unpkg.com/lit?module";
import StyledElement from "../styles/styled-element.js";
import getBranches from "./get-branches.js";

class RepoViewer extends StyledElement {
	static styles = super.styles;

	static get properties() {
		return {
			repo: { type: String, state: true },
			branches: { type: Array, state: true },
			files: { type: Array, state: true },
		};
	}

	async onBeforeEnter(location) {
		const username = location.params["username"];

		this.repo = location.params["repo"];
		this.branches = await getBranches(username, this.repo);
	}

	render() {
		const branches = this.branches.map(
			(b) => html`<option value="${b.name}">${b.name}</option>`
		);

		return html`<div id="repo-viewer">
			<h3>
				${this.repo}
				<hr />
			</h3>

			<label for="branch">Branch</label>
			<select id="branch" required>
				<option value="" selected>Select a Branch...</option>
				${branches}
			</select>
		</div>`;
	}
}

customElements.define("repo-viewer", RepoViewer);
