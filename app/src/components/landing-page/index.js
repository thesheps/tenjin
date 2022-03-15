import { html, LitElement } from "https://unpkg.com/lit?module";
import withState from "../../state/withState.js";
import state from "../../state/initialState.js";
import styles from "../../styles/styles.js";

class LandingPage extends withState(LitElement, state) {
	static styles = styles;

	async firstUpdated() {
		window.addEventListener("STATE_UPDATED", () => this.requestUpdate());
	}

	async onBeforeEnter(location) {
		const urlParts = window.location.host.split(".");
		const sub = window.location.host.split(".")[0];

		state.account = sub === "www" || urlParts.length === 1 ? "" : sub;
		state.repo = location.params["repo"];
	}

	render() {
		const lister = state.account
			? html`<repo-lister></repo-lister>`
			: html`<div></div>`;

		const login = state.account
			? html`<github-auth></github-auth>`
			: html`<intro-splash></intro-splash>`;

		return html`<div class="row container">
			<div class="col-md-3 margin-large">${lister}</div>
			<div class="col">${login}</div>
		</div>`;
	}
}

customElements.define("landing-page", LandingPage);
