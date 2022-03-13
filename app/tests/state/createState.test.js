import createState from "../../src/state/createState";

describe("createState function", () => {
	it("Turns the specified object into an observable state", () => {
		const object = { foo: "bar" };
		const observableState = createState(object);
		observableState.onUpdate = jest.fn();

		observableState.foo = "baz";
		expect(observableState.onUpdate).toHaveBeenCalled();
	});

	it("Calls requestUpdate in all observers", () => {
		const object = { foo: "bar", requestUpdate: jest.fn() };
		const state = createState(object);
		const observer1 = { requestUpdate: jest.fn() };
		const observer2 = { requestUpdate: jest.fn() };
		state.addObserver(observer1);
		state.addObserver(observer2);

		state.foo = "baz";
		expect(observer1.requestUpdate).toHaveBeenCalled();
		expect(observer2.requestUpdate).toHaveBeenCalled();
	});
});
