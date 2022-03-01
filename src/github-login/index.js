import { html } from "https://unpkg.com/lit?module";
import StyledElement from "../styles/styled-element.js";
import getRepos from "./get-repos.js";

class GithubLogin extends StyledElement {
	static styles = super.styles;

	static get properties() {
		return {
			canSubmit: { type: Boolean, state: true },
			isLoading: { type: Boolean, state: true },
		};
	}

	username() {
		return this.renderRoot.querySelector("#username");
	}

	handleChange() {
		this.canSubmit = this.username().value.length > 0;
	}

	async handleClick(e) {
		e.preventDefault();

		this.isLoading = true;
		const repos = await getRepos(this.username().value);

		this.dispatchEvent(
			new CustomEvent("onReposDownloaded", {
				bubbles: true,
				composed: true,
				detail: repos,
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
						type="text"
						id="username"
						name="username"
						placeholder="username"
						required
					/>
				</label>
			</div>

			<button
				id="login-button"
				aria-busy="${this.isLoading}"
				.disabled="${!this.canSubmit || this.isLoading}"
				@click="${this.handleClick}"
			>
				${this.isLoading ? "Logging in..." : "Log in"}
			</button>
		</form>`;
	}
}

customElements.define("github-login", GithubLogin);
