import { html } from "https://unpkg.com/lit?module";
import TenjinElement from "../tenjin-element.js";

class GithubLogin extends TenjinElement {
	static styles = super.styles;

	static get properties() {
		return {
			canSubmit: { type: Boolean, state: true },
		};
	}

	isTextEntered(id) {
		return this.renderRoot.querySelector(`#${id}`).value.length > 0;
	}

	handleChange() {
		this.canSubmit =
			this.isTextEntered("access-token") && this.isTextEntered("git-user");
	}

	handleClick(e) {
		e.preventDefault();
	}

	render() {
		return html`<form id="github-login">
			<div class="grid">
				<label for="access-token">
					Github access token
					<input
						@input="${this.handleChange}"
						type="text"
						id="access-token"
						name="access-token"
						placeholder="ghp_ndAABduwawuUWDHKWUdW8ADDWG76dikAAD9I"
						required
					/>
				</label>

				<label for="git-user">
					Git user
					<input
						@input="${this.handleChange}"
						type="text"
						id="git-user"
						name="git-user"
						placeholder="thesheps"
						required
					/>
				</label>
			</div>

			<button
				id="login-button"
				.disabled="${!this.canSubmit}"
				@click="${this.handleClick}"
			>
				Submit
			</button>
		</form>`;
	}
}

customElements.define("github-login", GithubLogin);
