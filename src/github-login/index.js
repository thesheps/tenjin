import { html } from "https://unpkg.com/lit?module";
import StyledElement from "../styled-element.js";

class GithubLogin extends StyledElement {
	static styles = super.styles;

	static get properties() {
		return {
			canSubmit: { type: Boolean, state: true },
			username: { type: String, state: false },
		};
	}

	connectedCallback() {
		super.connectedCallback();
		this.canSubmit = this.username;
	}

	getUsername() {
		return this.renderRoot.querySelector("#username");
	}

	handleChange() {
		this.canSubmit = this.getUsername().value.length > 0;
	}

	async handleClick(e) {
		e.preventDefault();

		const username = this.getUsername().value;
		const url = `${location.protocol}//${username}.${location.hostname}:${location.port}`;
		window.location.href = url;
	}

	render() {
		return html`<form id="github-login">
			<div class="grid">
				<label for="username">
					Git username
					<input
						@input="${this.handleChange}"
						value="${this.username}"
						type="text"
						id="username"
						name="username"
						placeholder="username"
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

customElements.define("github-login", GithubLogin);
