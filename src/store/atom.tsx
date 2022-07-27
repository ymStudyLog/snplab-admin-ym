import { atom } from 'recoil';

export const regionState = atom({
  key: 'regionState',
  default: {
    siDo: '',
    siGuGun: '',
  },
});

export const searchQuery = atom({
  key: 'searchQuery',
  default: "",
})