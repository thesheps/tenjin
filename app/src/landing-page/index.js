import { html } from "https://unpkg.com/lit?module";
import RoutedElement from "../routed-element.js";

class LandingPage extends RoutedElement {
	render() {
		const lister = this.account
			? html`<repo-lister></repo-lister>`
			: html`<div></div>`;

		const login = this.account
			? html`<github-auth></github-auth>`
			: html`<intro-splash></intro-splash>`;

		return html`<div class="row container">
			<div class="col-md-3 margin-large">${lister}</div>
			<div class="col">${login}</div>
		</div>`;
	}
}

customElements.define("landing-page", LandingPage);
