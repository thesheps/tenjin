import { LitElement } from "https://unpkg.com/lit?module";
import getAccessToken from "./get-access-token";

class AuthFlow extends LitElement {
	async onBeforeEnter(location) {
		const code = new URLSearchParams(window.location.search).get("code");
		const accessToken = await getAccessToken(code);

		console.log(accessToken);
	}
}

customElements.define("auth-flow", AuthFlow);
