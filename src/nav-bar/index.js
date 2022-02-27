import { html, LitElement } from "https://unpkg.com/lit?module";

class NavBar extends LitElement {
	render() {
		return html`<nav id="nav-bar">
			<ul>
				<li class="header"><strong>Tenjin.</strong></li>
			</ul>
		</nav>`;
	}
}

customElements.define("nav-bar", NavBar);
