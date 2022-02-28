import { html } from "https://unpkg.com/lit?module";
import TenjinElement from "../tenjin-element.js";

class LoadingSpinner extends TenjinElement {
	static styles = super.styles;

	render() {
		return html`<div aria-busy="true"></div>`;
	}
}

customElements.define("loading-spinner", LoadingSpinner);
