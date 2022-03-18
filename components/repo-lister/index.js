import { css, html } from "https://unpkg.com/lit?module";
import { state } from "../../state/index.js";
import { getRepos } from "../../api/index.js";
import styles from "../../styles/styles.js";
import ConnectedElement from "../connected-element/index.js";

class RepoLister extends ConnectedElement {
	static styles = [
		styles,
		css`
			#repos {
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
		super.firstUpdated();
		await this.fetchRepos();
	}

	async fetchRepos() {
		if (state.accessToken) {
			this.repos = await getRepos(state.account, state.accessToken);
		}
	}

	render() {
		const repos = this.repos.map(
			(r) => html`<li>
				<a class="repo" href="/${r.name}">${r.name}</a>
			</li>`
		);

		const yourRepos = html`<div id="repo-lister">
			<h3>
				Your repos <a href="#" @click="${() => this.fetchRepos()}">↻</a>
				<hr />
			</h3>

			<aside id="repos">
				<nav>
					<ul>
						${repos}
					</ul>
				</nav>
			</aside>
		</div>`;

		return this.repos.length > 0 ? yourRepos : html`<div></div>`;
	}
}

customElements.define("repo-lister", RepoLister);
