import { html } from "https://unpkg.com/lit?module";
import { state } from "../../state/index.js";
import styles from "../../styles/styles.js";
import ConnectedElement from "../connected-element/index.js";

class GithubAuth extends ConnectedElement {
	static styles = styles;

	async handleClick(e) {
		e.preventDefault();

		const clientId = "Iv1.c32d956da87adf8b";
		const d = location.hostname.replace(location.host.split(".")[0] + ".", "");
		const redirectUri = `${location.protocol}//${d}:${location.port}/auth`;
		const url = "https://github.com/login/oauth/authorize";

		location.href = `${url}?client_id=${clientId}&login=${state.account}&redirect_uri=${redirectUri}`;
	}

	render() {
		return html`<form id="github-auth">
			<h3>
				Authorise with Github!
				<hr />
			</h3>

			<p>
				To use Tenjin with the Github account <strong>${state.account}</strong>,
				we'll need to authorise you with the Tenjin Github app. Click the button
				below to get going!
			</p>

			<button id="go-button" @click="${this.handleClick}">
				Authorise with Github!
			</button>
		</form>`;
	}
}

customElements.define("github-auth", GithubAuth);
