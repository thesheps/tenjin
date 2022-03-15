import { get, set } from "../../src/state/store";
import createState from "../../src/state/createState";
import dispatchEvent from "../../src/state/dispatchEvent";

jest.mock("../../src/state/dispatchEvent");
jest.mock("../../src/state/store");

describe("createState function", () => {
	afterEach(() => {
		jest.resetAllMocks();
	});

	it("Calls dispatchEvent on state change", () => {
		const object = { foo: "bar" };
		const observableState = createState(object);

		observableState.foo = "baz";
		expect(dispatchEvent).toHaveBeenCalled();
	});

	it("Updates local storage on state change", () => {
		const object = { foo: "bar" };
		const observableState = createState(object);

		observableState.foo = "baz";
		expect(dispatchEvent).toHaveBeenCalled();
		expect(set).toHaveBeenNthCalledWith(2, "tenjinState", object);
	});

	it("Rehydrates state from local storage", () => {
		const object = { foo: "bar" };
		const observableState = createState(object);

		const output = observableState.foo;
		expect(get).toHaveBeenNthCalledWith(1, "tenjinState");
	});
});
