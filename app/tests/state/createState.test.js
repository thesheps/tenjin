import {
	createState,
	dispatchEvent,
	getStore,
	setStore,
} from "../../src/state/index";

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
		expect(setStore).toHaveBeenNthCalledWith(2, "tenjinState", object);
	});

	it("Rehydrates state from local storage", () => {
		const object = { foo: "bar" };
		const observableState = createState(object);

		const output = observableState.foo;
		expect(getStore).toHaveBeenNthCalledWith(1, "tenjinState");
	});
});
