import { atom, selector } from "recoil";

const homeState = atom ({
  key: 'homeState',
  default: {
    dropdown: false,
    feeds: [],
    modal: -1,
  },
})
export const dropdownState = selector({
  key: "dropdownState",
  get: ({ get }) => get(homeState).dropdown,
  set: ({ get, set }, dropdown) => set(homeState, { ...get(homeState), dropdown }),
});
export const feedsState = selector({
  key: "feedsState",
  get: ({ get }) => get(homeState).feeds,
  set: ({ get, set }, feeds) => set(homeState, { ...get(homeState), feeds }),
});
export const modalState = selector({
  key: "modalState",
  get: ({ get }) => get(homeState).modal,
  set: ({ get, set }, modal) => set(homeState, { ...get(homeState), modal }),
});
