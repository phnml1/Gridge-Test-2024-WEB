import { atom, selector } from "recoil";

const homeState = atom ({
  key: 'homeState',
  default: {
    sidebar: false,
    feeds: [],
  },
})
export const sidebarState = selector({
  key: "sidebarState",
  get: ({ get }) => get(homeState).sidebar,
  set: ({ get, set }, sidebar) => set(homeState, { ...get(homeState), sidebar }),
});
export const feedsState = selector({
  key: "feedsState",
  get: ({ get }) => get(homeState).feeds,
  set: ({ get, set }, feeds) => set(homeState, { ...get(homeState), feeds }),
});
