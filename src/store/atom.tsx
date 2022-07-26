import { atom, selector } from 'recoil';

export const regionState = atom({
  key: 'regionState',
  default: [],
});

export const searchQuery = atom({
  key: 'searchQuery',
  default: "",
})