import dispatchEvent from "./dispatchEvent.js";

export default function (obj) {
	return new Proxy(obj, {
		set(o, p, value) {
			o[p] = value;
			dispatchEvent(
				new Event("STATE_UPDATED", {
					bubbles: true,
				})
			);

			return true;
		},
	});
}
