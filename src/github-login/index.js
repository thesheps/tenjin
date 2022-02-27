import { html } from "https://unpkg.com/lit?module";
import TenjinElement from "../tenjin-element.js";

class GithubLogin extends TenjinElement {
	static styles = super.styles;

	render() {
		return html`<form id="github-login">
			<div class="grid">
				<label for="access-token">
					Github access token
					<input
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
						type="text"
						id="git-user"
						name="git-user"
						placeholder="thesheps"
						required
					/>
				</label>
			</div>

			<button type="submit">Submit</button>
		</form>`;
	}
}

customElements.define("github-login", GithubLogin);
