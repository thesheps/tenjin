import { css, html, LitElement } from "https://unpkg.com/lit?module";
import withState from "../../state/withState.js";
import state from "../../state/initialState.js";
import styles from "../../styles/styles.js";
import getRepos from "./get-repos.js";

class RepoLister extends withState(LitElement, state) {
	static styles = [
		styles,
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

	async firstUpdated() {
		this.repos = await getRepos(state.account);
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
