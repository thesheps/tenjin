import { LitElement } from "https://unpkg.com/lit?module";

class AuthFlow extends LitElement {
	async onBeforeEnter(location) {
		const code = new URLSearchParams(window.location.search).get("code");
		localStorage.setItem("authCode", code);
	}
}

customElements.define("auth-flow", AuthFlow);
