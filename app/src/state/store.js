export function getStore(key) {
	const stateString = localStorage.getItem(key);
	return JSON.parse(stateString);
}

export function setStore(key, obj) {
	localStorage.setItem(key, JSON.stringify(obj));
}

export function clearStore() {
	localStorage.clear();
}
