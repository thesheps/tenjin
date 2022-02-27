import { html, LitElement } from "https://unpkg.com/lit?module";

class LandingPage extends LitElement {
	render() {
		return html`<div id="splash" class="container">Welcome to Tenjin!</div>`;
	}
}

customElements.define("landing-page", LandingPage);
