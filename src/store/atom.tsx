import { atom, selector } from "recoil";

export const regionState = atom({
  key: "regionState",
  default: {
    siDo: "",
    siGuGun: "",
  },
});

export const searchQuery = atom({
  key: "searchQuery",
  default: "",
});

export const genderInitialState = atom({
  key: "genderInitialState",
  default: "",
});

export const selectedGender = selector({
  key: "selectedGender",
  get: ({ get }) => {
    const gender : string = get(genderInitialState);
    if (gender === "female") {
      return { female: true, male: false };
    } else if (gender === "male") {
      return { female: false, male: true };
    } else {
      return { female: false, male: false };
    }
  },
});