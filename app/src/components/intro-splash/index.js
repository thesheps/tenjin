import { html, LitElement } from "https://unpkg.com/lit?module";
import styles from "../../styles/styles.js";

class IntroSplash extends LitElement {
	static styles = styles;

	render() {
		return html`<div id="splash" class="col">
			<hgroup>
				<h1>Welcome to Tenjin! 🥷</h1>
				<p>A git-flavoured documentation aggregator <i>(#documentegator)</i></p>
			</hgroup>

			<hgroup>
				<h2>Yeah but - Why, though?</h2>
				<p>
					Tenjin is a project that aims to try and <i>make sense</i> of your git
					universe. It'll scrape your repositories for supported docs, and
					present them in a single, beautiful place 🚀
				</p>
			</hgroup>
		</div>`;
	}
}

customElements.define("intro-splash", IntroSplash);
