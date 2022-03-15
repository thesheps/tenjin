import dispatchEvent from "./dispatchEvent.js";
import { get, set } from "./store.js";

export default function (obj) {
	let state = get("tenjinState");

	if (!state) {
		set("tenjinState", obj);
	} else {
		Object.assign(obj, state);
	}

	return new Proxy(obj, {
		set(o, p, value) {
			if (o[p] == value) return true;

			o[p] = value;
			set("tenjinState", obj);

			dispatchEvent(
				new Event("STATE_UPDATED", {
					bubbles: true,
				})
			);

			return true;
		},
	});
}
