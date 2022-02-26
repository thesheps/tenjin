import { html } from "https://unpkg.com/lit?module";
import Header from "./header/index.js";
import RepoLister from "./repo-lister/index.js";

export default () =>
	html`<div class="container">${Header()}${RepoLister()}</div>`;
