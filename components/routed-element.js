import StyledElement from "./styled-element.js";

export default class RoutedElement extends StyledElement {
	static styles = super.styles;

	async onBeforeEnter(location) {
		const urlParts = window.location.host.split(".");
		const sub = window.location.host.split(".")[0];

		this.account = sub === "www" || urlParts.length === 1 ? "" : sub;
		this.repo = location.params["repo"];
	}

	firstUpdated() {
		this.dispatchEvent(
			new CustomEvent("onLoggedIn", {
				bubbles: true,
				composed: true,
				detail: this.account,
			})
		);
	}
}
