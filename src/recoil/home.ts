import { atom, selector } from "recoil";

const homeState = atom ({
  key: 'homeState',
  default: {
    sidebar: false
  },
})
export const sidebarState = selector({
  key: "sidebarState",
  get: ({ get }) => get(homeState).sidebar,
  set: ({ get, set }, sidebar) => set(homeState, { ...get(homeState), sidebar }),
});
