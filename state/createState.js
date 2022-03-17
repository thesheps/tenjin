import dispatchEvent from "./dispatchEvent.js";
import { getStore, setStore } from "./store.js";

export default function (obj) {
	let state = getStore("tenjinState");

	if (!state) {
		setStore("tenjinState", obj);
	} else {
		Object.assign(obj, state);
	}

	return new Proxy(obj, {
		set(o, p, value) {
			if (o[p] == value) return true;

			o[p] = value;
			setStore("tenjinState", obj);

			dispatchEvent(
				new Event("STATE_UPDATED", {
					bubbles: true,
				})
			);

			return true;
		},
	});
}
