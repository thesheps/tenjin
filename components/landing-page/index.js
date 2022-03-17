import { html } from "https://unpkg.com/lit?module";
import { state } from "../../state/index.js";
import styles from "../../styles/styles.js";
import ConnectedElement from "../connected-element/index.js";

class LandingPage extends ConnectedElement {
	static styles = styles;

	async onBeforeEnter(location) {
		state.branch = "";
		state.file = "";
		state.repo = location.params["repo"];
	}

	render() {
		const splash = state.accessToken
			? html`<auth-splash></intro-splash>`
			: html`<intro-splash></intro-splash>`;

		return html`${splash}`;
	}
}

customElements.define("landing-page", LandingPage);
