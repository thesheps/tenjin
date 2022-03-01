import { html } from "https://unpkg.com/lit?module";
import StyledElement from "../styles/styled-element.js";

class RepoViewer extends StyledElement {
	static styles = super.styles;

	static get properties() {
		return {
			name: { type: String, state: true },
		};
	}

	async onBeforeEnter(location) {
		this.name = location.params["repoName"];
	}

	render() {
		return html`<div>
			<h3>
				${this.name}
				<hr />
			</h3>
		</div>`;
	}
}

customElements.define("repo-viewer", RepoViewer);
