import { html } from "https://unpkg.com/lit?module";
import StyledElement from "../styles/styled-element.js";

class RepoLister extends StyledElement {
	static styles = super.styles;

	static get properties() {
		return {
			repos: { type: Array, state: true },
		};
	}

	constructor() {
		super();
		this.repos = [];
	}

	handleDownload(downloadEvent) {
		this.repos = downloadEvent.detail;
	}

	connectedCallback() {
		super.connectedCallback();
		window.addEventListener("onReposDownloaded", (event) =>
			this.handleDownload(event)
		);
	}

	render() {
		const repos = this.repos.map((r) => html`<div>${r.name}</div>`);

		return html`<div id="repo-lister">
			<h3>
				Your repos
				<hr />
			</h3>
			${repos}
		</div>`;
	}
}

customElements.define("repo-lister", RepoLister);
