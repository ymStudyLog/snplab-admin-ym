import React from 'react';
// import { regionState } from '../../store/atom';
// import { useRecoilState } from 'recoil';
import { RegionProps, siDoListProps } from '../../types/Region.type';
import * as R from './Region.styled';
import { MdClose } from 'react-icons/md';
import { SubmitButton } from '../../styles/template';
import { regionService, getRegionData, siDoService, getSiDoData } from '../../api/api';

const Region = ({ setShowRegionModal }: any) => {
  // const [region, setRegion] = useRecoilState<RegionProps[]>(regionState);
  // React.useEffect(() => {
  //   getRegionData(regionService).then((data) => {
  //     setRegion(data);
  //   });
  // }, []);
  // console.log(region[0].인천광역시);

  const [siDo, setSiDo] = React.useState<siDoListProps[]>([]);
  React.useEffect(() => {
    getSiDoData<siDoListProps[]>(siDoService).then((data) => {
      setSiDo(data);
    });
  }, []);
  // console.log(siDo);

  // const [region, setRegion] = React.useState<RegionProps[]>([]);
  // React.useEffect(() => {
  //   getRegionData<RegionProps[]>(regionService).then((data) => {
  //     setRegion(data);
  //   });
  // }, []);
  // console.log(region);

  // 시/도 선택하면
  // const handleRegionData = () => {
  //   setRegion((event) => {region.push(event.target.value)})
  // }

  return (
    <R.Container>
      <R.HeaderContainer>
        <R.CloseButton
          onClick={() => {
            setShowRegionModal(false);
            console.log('모달 Close');
          }}
        >
          <MdClose />
        </R.CloseButton>
        <R.Header>거주지역 선택</R.Header>
      </R.HeaderContainer>
      <R.ContentContainer>
        <R.MenuTitleContainer>
          <R.MenuTitle>시/도</R.MenuTitle>
          <R.MenuTitle>시/구/군</R.MenuTitle>
        </R.MenuTitleContainer>
        <R.MenuListContainer>
          <R.Menu>
            {/* siDoList 데이터 가져오기 -> 기본으로 3개만 보이고 스크롤 가능하게 */}
            {siDo.map((data: siDoListProps, index: number) => (
              <R.MenuList key={index}>{data}</R.MenuList>
            ))}
            {/* {siDo.map((data: siDoListProps, index: number) => console.log(data))} */}

            {/* <R.MenuList>경기</R.MenuList>
            <R.MenuList>서울</R.MenuList>
            <R.MenuList>강원</R.MenuList> */}
          </R.Menu>
          <R.Menu>
            {/* siDo 선택에 따라 값이 바뀜 -> 바뀐 값 3개 보이고 스크롤 */}
            <R.MenuList>강남구</R.MenuList>
            <R.MenuList>강동구</R.MenuList>
            <R.MenuList>강북구</R.MenuList>
          </R.Menu>
        </R.MenuListContainer>
      </R.ContentContainer>
      <SubmitButton disabled={false}>확인</SubmitButton>
    </R.Container>
  );
};

export default Region;
