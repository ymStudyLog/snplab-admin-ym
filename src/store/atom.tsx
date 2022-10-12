import { atom, selector } from "recoil";

export const selectedRegion = atom<string[]>({
  key: "selectedRegion",
  default: [],
});

export const searchQuery = atom<string>({
  key: "searchQuery",
  default: "",
});

export const genderInitialState = atom<string>({
  key: "genderInitialState",
  default: "",
});

export const selectedGender = selector({
  key: "selectedGender",
  get: ({ get }) => {
    const gender: string = get(genderInitialState);
    if (gender === "female") {
      return { female: true, male: false };
    } else if (gender === "male") {
      return { female: false, male: true };
    } else {
      return { female: false, male: false };
    }
  },
});
