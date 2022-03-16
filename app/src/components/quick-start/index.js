import { html, LitElement } from "https://unpkg.com/lit?module";

class QuickStart extends LitElement {
	render() {
		return html`<hgroup>
				<h2>Quickstart?</h2>
				<p>
					First things first - Throw your Github account/organisation name into
					this box. With this we'll be able to go and scrape all of your
					account/organisation for any publically-available matching docs and
					work our magic! 🪄
				</p>
			</hgroup>

			<github-auth></github-auth>`;
	}
}

customElements.define("quick-start", QuickStart);
