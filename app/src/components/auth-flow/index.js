import { state } from "../../state/index.js";
import styles from "../../styles/styles.js";
import getAccessToken from "./get-access-token.js";
import ConnectedElement from "../connected-element/index.js";

class AuthFlow extends ConnectedElement {
	static styles = styles;

	async onBeforeEnter(location) {
		const code = new URLSearchParams(window.location.search).get("code");
		const accessToken = await getAccessToken(code);
		state.accessToken = accessToken.access_token;

		window.location.href = "/";
	}
}

customElements.define("auth-flow", AuthFlow);
