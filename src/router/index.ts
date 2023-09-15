// import "@/utils/sso";
import { Router, createRouter } from "vue-router";
import { getHistoryMode } from "./utils";

/** 创建路由实例 */
export const router: Router = createRouter({
  history: getHistoryMode(import.meta.env.VITE_ROUTER_HISTORY),
  routes: [
    {
      path: "/",
      name: "Home",
      component: () => import("@/views/welcome/index.vue"),
      meta: {
        title: "首页"
      }
    }
  ],
  strict: true
});

export default router;
