import { html, css, LitElement } from "https://unpkg.com/lit?module";
import styles from "../styles.js";

class NavBar extends LitElement {
	static styles = styles;

	render() {
		return html`<nav id="nav-bar" class="container-fluid">
			<ul>
				<li><h1>Tenjin.</h1></li>
			</ul>
		</nav>`;
	}
}

customElements.define("nav-bar", NavBar);
