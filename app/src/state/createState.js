import dispatchEvent from "./dispatchEvent.js";

export default function (obj) {
	return new Proxy(obj, {
		set(o, p, value) {
			if (o[p] == value) return true;

			dispatchEvent(
				new Event("STATE_UPDATED", {
					bubbles: true,
				})
			);

			o[p] = value;

			return true;
		},
	});
}
