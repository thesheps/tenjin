import { html } from "https://unpkg.com/lit?module";
import StyledElement from "../styles/styled-element.js";

class LoadingSpinner extends StyledElement {
	static styles = super.styles;

	render() {
		return html`<div aria-busy="true"></div>`;
	}
}

customElements.define("loading-spinner", LoadingSpinner);
