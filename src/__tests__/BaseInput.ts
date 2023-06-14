import { mount } from "@vue/test-utils";
import BaseInput from "../components/BaseInput.vue";
// BaseInput.test.ts
test("Input", async () => {
  const wrapper = mount(BaseInput, {
    props: {
      name: "input-test",
    },
  });

  // because we dont send props label, the labe must be not showing
  expect(wrapper.find("label").exists()).toBeFalsy();

  wrapper.setProps({ label: "Username" });
  await wrapper.vm.$nextTick();

  expect(wrapper.find("label").exists()).toBeTruthy();

  wrapper.setProps({ modelValue: "irsyaad" });
  await wrapper.vm.$nextTick();

  expect(
    (wrapper.find("[name='input-test']").element as HTMLInputElement).value
  ).toBe("irsyaad");
});
