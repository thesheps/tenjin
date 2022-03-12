import { css, html } from "https://unpkg.com/lit?module";
import StyledElement from "../styled-element.js";

class IntroSplash extends StyledElement {
	static styles = [
		super.styles,
		css`
			#splash {
				height: 100vh;
			}
		`,
	];

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

			<hgroup>
				<h2>Quickstart?</h2>
				<p>
					First things first - Throw your Github account/organisation name into
					this box. With this we'll be able to go and scrape all of your
					account/organisation for any publically-available matching docs and
					work our magic! 🪄
				</p>
			</hgroup>

			<github-username
				username="${this.username}"
				canSubmit="true"
			></github-username>
		</div>`;
	}
}

customElements.define("intro-splash", IntroSplash);
