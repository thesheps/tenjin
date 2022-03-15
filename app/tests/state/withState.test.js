import createState from "../../src/state/createState";
import withState from "../../src/state/withState";

describe("withTest mixin", () => {
	it("Decorates the provided class with state object", () => {
		class Foo {}
		const state = createState({ bar: "baz" });
		const decorated = withState(Foo, state);

		expect(decorated.state).toEqual(state);
	});
});
