import { LitElement } from "https://unpkg.com/lit?module";

export default class ConnectedElement extends LitElement {
	async firstUpdated() {
		window.addEventListener("STATE_UPDATED", () => this.requestUpdate());
	}
}
