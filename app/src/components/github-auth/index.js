import { html } from "https://unpkg.com/lit?module";
import { state } from "../../state/index.js";
import styles from "../../styles/styles.js";
import ConnectedElement from "../connected-element/index.js";

class GithubAuth extends ConnectedElement {
	static styles = styles;

	static get properties() {
		return {
			canSubmit: { type: Boolean, state: true },
		};
	}

	getAccount() {
		return this.renderRoot.querySelector("#account");
	}

	handleChange() {
		this.canSubmit = this.getAccount().value.length > 0;
	}

	async handleClick(e) {
		e.preventDefault();
		state.account = this.getAccount().value;

		const port = location.port ? `:${location.port}` : "";
		const redirectUri = `${location.protocol}//${location.hostname}${port}/auth`;
		const url = "https://github.com/login/oauth/authorize";

		location.href = `${url}?client_id=${state.clientId}&login=${state.account}&redirect_uri=${redirectUri}`;
	}

	render() {
		return html`<form id="github-auth">
			<div class="grid">
				<label for="account">
					Github account
					<input
						@input="${this.handleChange}"
						type="text"
						id="account"
						name="account"
						placeholder="account"
						required
					/>
				</label>
			</div>

			<button
				id="go-button"
				.disabled="${!this.canSubmit}"
				@click="${this.handleClick}"
			>
				Authorise with Github!
			</button>
		</form>`;
	}
}

customElements.define("github-auth", GithubAuth);
