import { html, css } from "https://unpkg.com/lit?module";
import StyledElement from "../styled-element.js";

class NavBar extends StyledElement {
	static styles = [
		super.styles,
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
