import { html } from "https://unpkg.com/lit?module";
import TenjinElement from "../tenjin-element.js";

class NavBar extends TenjinElement {
	static styles = super.styles;

	render() {
		return html`<nav id="nav-bar" class="container-fluid">
			<ul>
				<li><h1>Tenjin.</h1></li>
			</ul>
		</nav>`;
	}
}

customElements.define("nav-bar", NavBar);
