import { css, html } from "https://unpkg.com/lit?module";
import StyledElement from "../styled-element.js";
import getRepos from "./get-repos.js";

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

	async handleLogin(loginEvent) {
		this.repos = await getRepos(loginEvent.detail);
	}

	connectedCallback() {
		super.connectedCallback();
		window.addEventListener(
			"onLoggedIn",
			async (event) => await this.handleLogin(event)
		);
	}

	render() {
		const repos = this.repos.map(
			(r) => html`<li>
				<a class="repo" href="/${r.name}">${r.name}</a>
			</li>`
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
