import React from 'react';
import { regionState } from '../../store/atom';
import { useRecoilState } from 'recoil';
import { RegionDataType, RegionAtomType } from '../../types/Region.type';
import * as R from '../../styles/RegionModal.styled';
import { MdClose } from 'react-icons/md';
import { SubmitButton } from '../../styles/template';
import { regionService, getRegionData } from '../../api/api';

const RegionModal = ({ setShowRegionModal }: any) => {
  const [regionData, setRegionData] = React.useState<RegionDataType>({});
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
      <SubmitButton type='button' onClick={goBackToForm} disabled={region.siGuGun.length === 0 || region.siDo.length === 0}>
        확인
      </SubmitButton>
    </R.Container>
  );
};

export default RegionModal;
