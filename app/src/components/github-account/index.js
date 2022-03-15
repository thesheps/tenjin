import { html } from "https://unpkg.com/lit?module";
import { state } from "../../state/index.js";
import styles from "../../styles/styles.js";
import ConnectedElement from "../connected-element/index.js";

class GithubAccount extends ConnectedElement {
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
		state.baseUrl = `${location.protocol}//${state.account}.${location.hostname}:${location.port}`;

		window.location.href = state.baseUrl;
	}

	render() {
		return html`<form id="github-account">
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
				Go!
			</button>
		</form>`;
	}
}

customElements.define("github-account", GithubAccount);
