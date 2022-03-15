import createState from "../../src/state/createState";
import dispatchEvent from "../../src/state/dispatchEvent";

jest.mock("../../src/state/dispatchEvent");

describe("createState function", () => {
	it("Calls dispatchEvent on state change", () => {
		const object = { foo: "bar" };
		const observableState = createState(object);

		observableState.foo = "baz";
		expect(dispatchEvent).toHaveBeenCalled();
	});
});
