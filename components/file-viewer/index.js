import { html } from "https://unpkg.com/lit?module";
import { unsafeHTML } from "https://unpkg.com/lit/directives/unsafe-html.js?module";
import { marked } from "https://unpkg.com/marked?module";
import { state } from "../../state/index.js";
import styles from "../../styles/styles.js";
import ConnectedElement from "../connected-element/index.js";

class FileViewer extends ConnectedElement {
	static styles = styles;

	static get properties() {
		return {
			markup: { type: String, state: true },
		};
	}

	async onBeforeEnter(location) {
		const sha = location.params["file"];
		const file = state.files.filter((f) => f.sha === sha)[0];
		const fileResponse = await fetch(file.url);
		const details = await fileResponse.json();

		state.repo = location.params["repo"];
		state.branch = location.params["branch"];
		state.file = file.path;

		const text = atob(details.content);
		this.markup = unsafeHTML(marked.parse(text));
	}

	render() {
		return html`<div>
			<div id="file-viewer">
				<bread-crumbs></bread-crumbs>
				${this.markup}
			</div>
		</div>`;
	}
}

customElements.define("file-viewer", FileViewer);
