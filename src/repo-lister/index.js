import { css, html } from "https://unpkg.com/lit?module";
import StyledElement from "../styles/styled-element.js";

class RepoLister extends StyledElement {
	static styles = [
		super.styles,
		css`
			#repo-lister {
				overflow-y: scroll;
				height: calc(100vh - 30vh);
			}
		`,
	];

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
		const repos = this.repos.map(
			(r) => html`<li><a href="/repo/${r.name}">${r.name}</a></li>`
		);

		return html`<div>
			<h3>
				Your repos
				<hr />
			</h3>
			<aside id="repo-lister">
				<nav>
					<ul>
						${repos}
					</ul>
				</nav>
			</aside>
		</div>`;
	}
}

customElements.define("repo-lister", RepoLister);
