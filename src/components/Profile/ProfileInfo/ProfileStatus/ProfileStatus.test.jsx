import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("Button component", () => {
	test("it shows the expected text when clicked (testing the wrong way!)", () => {
		const component = create(<ProfileStatus status='incubator' />);
		const instance = component.getInstance();
		expect(instance.state.status).toBe("incubator");
	});
	test("after creation div with status should be displayed", () => {
		const component = create(<ProfileStatus status='incubator' />);
		const root = component.root;
		const div = root.findByProps({ className: "activate_editMode" });
		expect(div).not.toBeNull();
	});
	test("after creation div should contains correct status", () => {
		const component = create(<ProfileStatus status='incubator' />);
		const root = component.root;
		const div = root.findByProps({ className: "activate_editMode" });
		expect(div.props.children).toBe("incubator");
	});
	test("after creation input with status shouldn't be displayed", () => {
		const component = create(<ProfileStatus status='incubator' />);
		const root = component.root;
		expect(() => {
			return root.findByType("input");
		}).toThrow();
	});
	test("input should be displayed in editMode instead of div", () => {
		const component = create(<ProfileStatus status='incubator' />);
		const root = component.root;
		const div = root.findByProps({ className: "activate_editMode" });
		div.props.onDoubleClick();
		const input = root.findByType("input");
		expect(input.props.value).toBe("incubator");
	});
	test("callback should be called", () => {
		const mockCallback = jest.fn();
		const component = create(<ProfileStatus status='incubator' updateStatus={mockCallback} />);
		const instance = component.getInstance();
		instance.deactivateEditMode();
		expect(mockCallback.mock.calls.length).toBe(1);
	});
});
