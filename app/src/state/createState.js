export default function (obj) {
	obj.observers = [];
	obj.addObserver = (o) => obj.observers.push(o);
	obj.onUpdate = () => {
		for (let i = 0; i < obj.observers.length; i++) {
			obj.observers[i].requestUpdate();
		}
	};

	return new Proxy(obj, {
		set(o, p, value) {
			o[p] = value;
			o.onUpdate();
			return true;
		},
	});
}
