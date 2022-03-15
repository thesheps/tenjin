import { css, html, LitElement } from "https://unpkg.com/lit?module";
import styles from "../../styles/styles.js";

class NavBar extends LitElement {
	static styles = [
		styles,
		css`
			nav {
				box-shadow: 0 0.2px 0;
			}

			a {
				color: white;
			}
		`,
	];

	render() {
		return html`<nav id="nav-bar" class="container-fluid">
			<ul>
				<li>
					<h1><a href="/">Tenjin.</a></h1>
				</li>
			</ul>
		</nav>`;
	}
}

customElements.define("nav-bar", NavBar);
