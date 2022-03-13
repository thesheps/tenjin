import createState from "../../src/state/createState";
import withState from "../../src/state/withState";

describe("withTest mixin", () => {
	it("Decorates the provided class with state object", () => {
		class Foo {}
		const state = createState({ bar: "baz" });
		const decorated = withState(Foo, state);

		expect(decorated.state).toEqual(state);
	});

	it("Throws an error when the provided state object doesn't have onUpdate handler", () => {
		class Foo {}
		const state = { bar: "baz" };
		const func = () => withState(Foo, state);

		expect(func).toThrow("The specified state object is not observable!");
	});

	it("Adds the provided object as an observer", () => {
		const requestUpdateMock = jest.fn();

		class Foo {
			requestUpdate = requestUpdateMock;
		}

		const instance = new Foo();
		const state = createState({ bar: "baz" });
		const observed = withState(instance, state);
		state.bar = "qux";

		expect(observed.requestUpdate).toHaveBeenCalled();
	});
});
