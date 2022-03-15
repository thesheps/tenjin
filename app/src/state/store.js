export function get(key) {
	const stateString = localStorage.getItem(key);
	return JSON.parse(stateString);
}

export function set(key, obj) {
	localStorage.setItem(key, JSON.stringify(obj));
}
