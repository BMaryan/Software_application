import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("Button component", () => {
	test("it shows the expected text when clicked (testing the wrong way!)", () => {
		const component = create(<ProfileStatus status='incubator' />);
		const instance = component.getInstance();
		expect(instance.state.status).toBe("incubator");
	});
	test("after creation span with status should be displayed", () => {
		const component = create(<ProfileStatus status='incubator' />);
		const root = component.root;
		const span = root.findByType("span");
		expect(span).not.toBeNull();
	});
	test("after creation span should contains correct status", () => {
		const component = create(<ProfileStatus status='incubator' />);
		const root = component.root;
		const span = root.findByType("span");
		expect(span.props.status).toBe("incubator");
	});
});
