import { html } from "https://unpkg.com/lit?module";
import StyledElement from "../styled-element.js";

class GithubLogin extends StyledElement {
	static styles = super.styles;

	static get properties() {
		return {
			canSubmit: { type: Boolean, state: true },
			isLoading: { type: Boolean, state: true },
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

		this.isLoading = true;
		const username = this.getUsername().value;

		this.dispatchEvent(
			new CustomEvent("onLoggedIn", {
				bubbles: true,
				composed: true,
				detail: username,
			})
		);

		this.isLoading = false;
	}

	render() {
		return html`<form id="github-login">
			<div class="grid">
				<label for="username">
					Git user
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
				id="load-button"
				aria-busy="${this.isLoading}"
				.disabled="${!this.canSubmit || this.isLoading}"
				@click="${this.handleClick}"
			>
				${this.isLoading ? "Loading..." : "Load"}
			</button>
		</form>`;
	}
}

customElements.define("github-login", GithubLogin);
