import Test from "./templates/test/index.vue";

// 引入组件
export const useHook = () => {
  const comps = {
    test: Test
  };

  return {
    comps
  };
};
