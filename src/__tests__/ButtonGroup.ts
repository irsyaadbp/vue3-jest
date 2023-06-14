import { mount, shallowMount } from "@vue/test-utils";
import ButtonGroup from "../components/ButtonGroup.vue";

test("button-group with shallowMount", () => {
  const wrapper = shallowMount(ButtonGroup, {
    props: {
      length: 4,
    },
  });

  console.log("Example shallowMount", wrapper.html());
});

test("button-group with shallowMount", () => {
  const wrapper = mount(ButtonGroup, {
    props: {
      length: 4,
    },
  });

  console.log("Example mount", wrapper.html());
});
