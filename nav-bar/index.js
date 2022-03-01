import { html } from "https://unpkg.com/lit?module";
import StyledElement from "../styles/styled-element.js";

class NavBar extends StyledElement {
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
