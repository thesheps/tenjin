import { html } from "https://unpkg.com/lit?module";
import { state } from "../../state/index.js";
import getFiles from "./get-files.js";
import styles from "../../styles/styles.js";
import ConnectedElement from "../connected-element/index.js";

class FileLister extends ConnectedElement {
	static styles = styles;

	static get properties() {
		return {
			files: { type: Array, state: true },
		};
	}

	constructor() {
		super();
		this.files = [];
	}

	async firstUpdated() {
		super.firstUpdated();

		if (state.accessToken) {
			this.files = await getFiles(
				state.account,
				state.repo,
				state.branch,
				state.accessToken
			);
		}
	}

	render() {
		const files = this.files.map(
			(f) => html`<li>
				<a class="file" href="#">${f}</a>
			</li>`
		);

		return html` <aside id="files">
			<nav>
				<ul>
					${files}
				</ul>
			</nav>
		</aside>`;
	}
}

customElements.define("file-lister", FileLister);
