import { html } from "https://unpkg.com/lit?module";
import { state } from "../../state/index.js";
import styles from "../../styles/styles.js";
import getAccessToken from "./get-access-token.js";
import ConnectedElement from "../connected-element/index.js";

class AuthFlow extends ConnectedElement {
	static styles = styles;

	async onBeforeEnter(location) {
		const code = new URLSearchParams(window.location.search).get("code");
		const accessToken = await getAccessToken(code);
		state.accessToken = accessToken.access_token;
	}

	firstUpdated() {
		setTimeout(() => {
			state.loggedIn = true;
			window.location.href = "/";
		}, 2000);
	}

	render() {
		return html`<button aria-busy="true" class="secondary">
			Authorising...
		</button>`;
	}
}

customElements.define("auth-flow", AuthFlow);
