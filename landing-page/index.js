import { html, LitElement } from "https://unpkg.com/lit?module";
import styles from "../styles.js";

class LandingPage extends LitElement {
	static styles = styles;

	render() {
		return html`<div id="splash" class="container">
			<h1>Welcome to Tenjin! 🥷</h1>
			<hr />
			<h2>Why, though?</h2>
			<p>
				Tenjin is a project that aims to try and <i>make sense</i> of your git
				universe. It'll scrape your repositories for supported docs*, and
				present them in a single, beautiful place 🚀

				<br />
				<br />
				<small>
					*At the time of writing the intention is to support PlantUML diagrams,
					markdown files and mermaid js diagrams.
				</small>
			</p>

			<h2>Quickstart?</h2>
			<p>
				First things first - You're going to need to go and grab yourself a
				Github Personal Access Token. With this we'll be able to go and scrape
				your account/organisation for any matching docs and work our magic! 🪄
			</p>
		</div>`;
	}
}

customElements.define("landing-page", LandingPage);
