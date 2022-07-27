import { atom, selector } from "recoil";

export const radioInitialState = atom({
  key: "radioInitialState",
  default: "",
});

const radioSelector = selector({
  key: "radioSelector",
  get: ({ get }) => {
    const gender = get(radioInitialState);
    if (gender === "female") {
      return { female: true, male: false };
    } else if (gender === "male") {
      return { female: false, male: true };
    } else {
      return { female: false, male: false };
    }
  },
});

export const radioState = atom({
  key: "radioState",
  default: radioSelector,
});
