import { html, LitElement } from "https://unpkg.com/lit?module";
import styles from "../../styles/styles.js";

class AuthSplash extends LitElement {
	static styles = styles;

	render() {
		return html`<div id="splash" class="col">
			<hgroup>
				<h1>You're In! 🙀</h1>
				<p>
					We've been able to authorise against your Github account and we can
					now get started!
				</p>
			</hgroup>

			<hgroup>
				<h2>So what's next?</h2>
				<p>
					The listing over here 👈 shows all of the public repos we were able to
					find for your Github account. If you select one of these you'll then
					be able to see all the branches related to it, and any and all
					supported documentation files! 🚀
				</p>

				<p>
					Why don't you take a look and see what docs you're currently exposing
					to the world? 👀
				</p>
			</hgroup>
		</div>`;
	}
}

customElements.define("auth-splash", AuthSplash);
