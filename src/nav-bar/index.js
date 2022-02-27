import { html, css, LitElement } from "https://unpkg.com/lit?module";

class NavBar extends LitElement {
	static styles = css`
		li {
			list-style: none;
		}
	`;

	render() {
		return html`<nav id="nav-bar">
			<ul>
				<li class="header"><strong>Tenjin.</strong></li>
			</ul>
		</nav>`;
	}
}

customElements.define("nav-bar", NavBar);
