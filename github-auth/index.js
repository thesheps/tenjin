import { html } from "https://unpkg.com/lit?module";
import StyledElement from "../styled-element.js";

class GithubAuth extends StyledElement {
	static styles = super.styles;

	static get properties() {
		return {
			canSubmit: { type: Boolean, state: true },
		};
	}

	getAccessToken() {
		return this.renderRoot.querySelector("#accessToken");
	}

	handleChange() {
		this.canSubmit = this.getAccessToken().value.length > 0;
	}

	async handleClick(e) {
		e.preventDefault();
	}

	render() {
		return html`<form id="github-auth">
			<div class="grid">
				<label for="accessToken">
					Github access token
					<input
						@input="${this.handleChange}"
						value="${this.accessToken}"
						type="text"
						id="accessToken"
						name="accessToken"
						placeholder="ghp_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
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

customElements.define("github-auth", GithubAuth);
