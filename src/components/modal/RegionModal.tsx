import React from "react";
import { selectedRegion } from "../../store/atom";
import { useRecoilState } from "recoil";
import * as R from "../../styles/RegionModal.styled";
import { MdClose } from "react-icons/md";
import { SubmitButton } from "../../styles/template";
import { getRegionData } from "../../api/api";

type RegionDataType = {
  [key: string]: string[];
};

//제출 안하고 모달 나가면 값 초기화
const RegionModal = ({ setShowRegionModal }: any) => {
  const [regionData, setRegionData] = React.useState<RegionDataType>({});
  const [siDoSiGuGun, setSiDoSiGuGun] =
    useRecoilState<string[]>(selectedRegion);
  const [siGuGun, setSiGuGun] = React.useState<string[]>([]);
  
  const onClickSiDo = (siDo: string, index: number) => {
    [...siDoSiGuGun].length === 0
      ? setSiDoSiGuGun((prevRegion) => [...prevRegion].concat(siDo))
      : setSiDoSiGuGun([siDo]);
    setSiGuGun(Object.values(regionData)[index]);
  };
  const onClickSiGuGun = (siGuGun: string) => {
    [...siDoSiGuGun].length === 1
      ? setSiDoSiGuGun((prevRegion) => [...prevRegion].concat(siGuGun))
      : setSiDoSiGuGun((prevRegion) =>
          [...prevRegion].splice(0, 1).concat(siGuGun)
        );
  };

  React.useEffect(() => {
    getRegionData<RegionDataType>().then((data) => {
      setRegionData(data);
    });
  }, []);

  const goBackToForm = () => {
    setShowRegionModal(false);
  };

  return (
    <R.Container>
      <R.HeaderContainer>
        <R.CloseButton onClick={goBackToForm}>
          <MdClose />
        </R.CloseButton>
        <R.HeaderText>거주지역 선택</R.HeaderText>
      </R.HeaderContainer>
      <R.ContentContainer>
        <R.MenuTitleContainer>
          <R.MenuTitle>시/도</R.MenuTitle>
          <R.MenuTitle>시/구/군</R.MenuTitle>
        </R.MenuTitleContainer>
        <R.MenuListContainer>
          <R.Menu>
            {Object.keys(regionData).map((siDo: string, index: number) => (
              <R.MenuList key={index} onClick={() => onClickSiDo(siDo, index)}>
                {siDo}
              </R.MenuList>
            ))}
          </R.Menu>

          <R.Menu>
            {siGuGun.map((siGuGun: string, index: number) => (
              <R.MenuList key={index} onClick={() => onClickSiGuGun(siGuGun)}>
                {siGuGun}
              </R.MenuList>
            ))}
          </R.Menu>
        </R.MenuListContainer>
      </R.ContentContainer>
      <SubmitButton
        type="button"
        onClick={goBackToForm}
        disabled={siDoSiGuGun.length < 2}
      >
        확인
      </SubmitButton>
    </R.Container>
  );
};

export default RegionModal;
