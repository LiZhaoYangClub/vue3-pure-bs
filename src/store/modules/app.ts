import { store } from "@/store";
import { appType } from "./types";
import { defineStore } from "pinia";
import { deviceDetection } from "@pureadmin/utils";

export const useAppStore = defineStore({
  id: "pure-app",
  state: (): appType => ({
    device: deviceDetection() ? "mobile" : "desktop"
  }),
  getters: {
    getDevice(state) {
      return state.device;
    }
  },
  actions: {
    toggleDevice(device: string) {
      this.device = device;
    }
  }
});

export function useAppStoreHook() {
  return useAppStore(store);
}
