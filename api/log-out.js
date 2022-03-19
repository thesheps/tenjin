import { clearStore } from "../state/store.js";

export default function logout() {
	clearStore();
	window.location.href = "/";
}
