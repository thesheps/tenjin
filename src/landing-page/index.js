import { html } from "https://unpkg.com/lit?module";
import TenjinElement from "../tenjin-element.js";

class LandingPage extends TenjinElement {
	static styles = super.styles;

	render() {
		return html`<div id="splash" class="container">
			<h1>Welcome to Tenjin! 🥷</h1>
			<h2>Why, though?</h2>
			<p>
				Tenjin is a project that aims to try and <i>make sense</i> of your git
				universe. It'll scrape your repositories for supported docs*, and
				present them in a single, beautiful place 🚀
			</p>

			<h2>Quickstart?</h2>
			<p>
				First things first - You're going to need to go and grab yourself a
				Github Personal Access Token. With this we'll be able to go and scrape
				your account/organisation for any matching docs and work our magic! 🪄
			</p>

			<github-login></github-login>
		</div>`;
	}
}

customElements.define("landing-page", LandingPage);
