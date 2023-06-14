import { mount } from "@vue/test-utils";
import BaseButton from "../components/BaseButton.vue";

// BaseButton.test.ts
test("button with same message", () => {
  const wrapper = mount(BaseButton, {
    props: {
      message: "Hello world",
    },
  });

  // Assert the rendered text of the component
  expect(wrapper.text()).toContain("Hello world");
});
