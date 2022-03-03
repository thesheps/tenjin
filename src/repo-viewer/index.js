import { html } from "https://unpkg.com/lit?module";
import StyledElement from "../styles/styled-element.js";
import getBranches from "./get-branches.js";

class RepoViewer extends StyledElement {
	static styles = super.styles;

	static get properties() {
		return {
			username: { type: String, state: true },
			repo: { type: String, state: true },
			branches: { type: Array, state: true },
			files: { type: Array, state: true },
		};
	}

	async onBeforeEnter(location) {
		this.username = location.params["username"];
		this.repo = location.params["repo"];
		this.branches = await getBranches(this.username, this.repo);
	}

	render() {
		this.dispatchEvent(
			new CustomEvent("onLoggedIn", {
				bubbles: true,
				composed: true,
				detail: this.username,
			})
		);

		const branches = this.branches.map(
			(b) => html`<option value="${b.name}">${b.name}</option>`
		);

		return html`<div id="repo-viewer">
			<h3>
				${this.repo}
				<hr />
			</h3>

			<label for="branch">Branches</label>
			<select id="branches" required>
				<option value="" selected>Select a Branch...</option>
				${branches}
			</select>
		</div>`;
	}
}

customElements.define("repo-viewer", RepoViewer);
