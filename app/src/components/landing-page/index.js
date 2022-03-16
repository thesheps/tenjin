import { html } from "https://unpkg.com/lit?module";
import { state } from "../../state/index.js";
import styles from "../../styles/styles.js";
import ConnectedElement from "../connected-element/index.js";

class LandingPage extends ConnectedElement {
	static styles = styles;

	async onBeforeEnter(location) {
		state.repo = location.params["repo"];
	}

	render() {
		const lister = state.accessToken
			? html`<repo-lister></repo-lister>`
			: html`<div></div>`;

		const login = state.accessToken
			? html`<auth-splash></intro-splash>`
			: html`<intro-splash></intro-splash>`;

		return html`<div class="row container">
			<div class="col-md-3 margin-large">${lister}</div>
			<div class="col">${login}</div>
		</div>`;
	}
}

customElements.define("landing-page", LandingPage);
