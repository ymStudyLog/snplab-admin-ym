import React from "react";
import { regionState } from "../../store/atom";
import { useRecoilState } from "recoil";
import * as R from "../../styles/RegionModal.styled";
import { MdClose } from "react-icons/md";
import { SubmitButton } from "../../styles/template";
import { regionService, getRegionData } from "../../api/api";

type RegionDataType = {
  [key: string]: string[];
};
export type RegionAtomType = { siDo: string; siGuGun: string };

const RegionModal = ({ setShowRegionModal }: any) => {
  const [regionData, setRegionData] = React.useState<RegionDataType>({}); //TODO 여기에서 regionData가 거주지역 데이터인거 같은데 이거 먼저 잘 들어오고 있는지 확인하기
  const [region, setRegion] = useRecoilState<RegionAtomType>(regionState);
  const [siGuGun, setSiGuGun] = React.useState<string[]>([]);

  const onClickSiDo = (siDo: string, index: number) => {
    setRegion((prevRegion) => ({ ...prevRegion, siDo }));
    setSiGuGun(Object.values(regionData)[index]);
  };

  const onClickSiGuGun = (siGuGun: string) => {
    setRegion((prevRegion) => ({ ...prevRegion, siGuGun }));
  };

  React.useEffect(() => {
    getRegionData<RegionDataType>(regionService).then((data) => {
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
        disabled={region.siGuGun.length === 0 || region.siDo.length === 0}
      >
        확인
      </SubmitButton>
    </R.Container>
  );
};

export default RegionModal;
