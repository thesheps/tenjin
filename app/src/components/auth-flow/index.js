import { LitElement } from "https://unpkg.com/lit?module";
import getAccessToken from "./get-access-token.js";

class AuthFlow extends LitElement {
	async onBeforeEnter(location) {
		const code = new URLSearchParams(window.location.search).get("code");
		const accessToken = await getAccessToken(code);
	}
}

customElements.define("auth-flow", AuthFlow);
