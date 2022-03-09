import { html } from "https://unpkg.com/lit?module";
import RoutedElement from "../routed-element.js";
import getBranches from "./get-branches.js";

class RepoViewer extends RoutedElement {
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
		super.onBeforeEnter(location);

		this.branches = await getBranches(this.username, this.repo);
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
