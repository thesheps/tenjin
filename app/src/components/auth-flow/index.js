import { state } from "../../state/index.js";
import styles from "../../styles/styles.js";
import getAccessToken from "./get-access-token.js";
import ConnectedElement from "../connected-element/index.js";

class AuthFlow extends ConnectedElement {
	static styles = styles;

	async onBeforeEnter(location) {
		const code = new URLSearchParams(window.location.search).get("code");
		state.accessToken = await getAccessToken(code);

		window.location.href = state.baseUrl;
	}
}

customElements.define("auth-flow", AuthFlow);
