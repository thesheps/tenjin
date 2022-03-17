import { css, html } from "https://unpkg.com/lit?module";
import { state } from "../../state/index.js";
import { clearStore } from "../../state/store.js";
import styles from "../../styles/styles.js";
import ConnectedElement from "../connected-element/index.js";

class NavBar extends ConnectedElement {
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

	async handleClick(e) {
		e.preventDefault();
		clearStore();

		location.href = "/";
	}

	render() {
		const brand = html`<ul>
			<li>
				<h1><a href="/">Tenjin.</a></h1>
			</li>
		</ul>`;

		const logout = html`<ul>
			<li>
				<a id="log-out-button" href="#" @click="${this.handleClick}"
					>${state.account} ⏻</a
				>
			</li>
		</ul>`;

		return state.loggedIn
			? html`<nav id="nav-bar" class="container-fluid">${brand}${logout}</nav>`
			: html`<nav id="nav-bar" class="container-fluid">${brand}</nav>`;
	}
}

customElements.define("nav-bar", NavBar);
