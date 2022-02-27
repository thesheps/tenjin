import { html, LitElement } from "https://unpkg.com/lit?module";

class RepoLister extends LitElement {
	render() {
		return html`<div>Repo Lister</div>`;
	}
}

customElements.define("repo-lister", RepoLister);
