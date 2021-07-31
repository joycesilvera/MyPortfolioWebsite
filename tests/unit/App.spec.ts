import { expect } from "chai";
import { mount, shallowMount, createLocalVue } from "@vue/test-utils";
import Navigation from "@/components/Navigation.vue";
import VueRouter from "vue-router";
import router from "@/router";
import App from "@/App.vue";

const localVue = createLocalVue();
localVue.use(VueRouter);

describe("App.vue", () => {
  it("Should have navigation", async () => {
    const wrapper = mount(App, {
      stubs: ["router-link", "router-view", "font-awesome-icon"]
    });
    expect(wrapper.contains(Navigation)).to.equal(true);
  });
});
