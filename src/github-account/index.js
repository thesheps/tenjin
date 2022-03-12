import { html } from "https://unpkg.com/lit?module";
import StyledElement from "../styled-element.js";

class GithubAccount extends StyledElement {
	static styles = super.styles;

	static get properties() {
		return {
			canSubmit: { type: Boolean, state: true },
			account: { type: String, state: false },
		};
	}

	connectedCallback() {
		super.connectedCallback();
		this.canSubmit = this.account;
	}

	getAccount() {
		return this.renderRoot.querySelector("#account");
	}

	handleChange() {
		this.canSubmit = this.getAccount().value.length > 0;
	}

	async handleClick(e) {
		e.preventDefault();

		const account = this.getAccount().value;
		const url = `${location.protocol}//${account}.${location.hostname}:${location.port}`;
		window.location.href = url;
	}

	render() {
		return html`<form id="github-account">
			<div class="grid">
				<label for="account">
					Github account
					<input
						@input="${this.handleChange}"
						value="${this.account}"
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
