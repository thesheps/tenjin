import { html } from "https://unpkg.com/lit?module";
import { state } from "../../state/index.js";
import { getFiles } from "../../api/index.js";
import styles from "../../styles/styles.js";
import ConnectedElement from "../connected-element/index.js";

class FileLister extends ConnectedElement {
	static styles = styles;

	constructor() {
		super();
	}

	async firstUpdated() {
		super.firstUpdated();

		if (state.accessToken) {
			state.files = await getFiles(
				state.account,
				state.repo,
				state.branch,
				state.accessToken
			);
		}
	}

	render() {
		const files = state.files.map(
			(f) => html`<li>
				<a class="file" href="/${state.repo}/${state.branch}/${f.sha}"
					>${f.path}</a
				>
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
