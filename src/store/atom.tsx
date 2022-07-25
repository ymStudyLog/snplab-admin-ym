import { atom, selector } from 'recoil';

export const regionState = atom({
  key: 'regionState',
  default: [],
});

// const [region, setRegion ] = useRecoilState(regionState)

// 경기도 클릭 -> setRegion((event)=>{region.push(event.target.value);})
// 용인시 클릭 -> setRegion((event)=>{region.push(event.target.value);})

// region = ['경기도', '용인시']

// FormSubmit 후 region 다시 빈배열로
