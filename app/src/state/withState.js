export default function (obj, state) {
	if (state.onUpdate === undefined)
		throw new Error("The specified state object is not observable!");

	obj.state = state;
	state.addObserver(obj);

	return obj;
}
