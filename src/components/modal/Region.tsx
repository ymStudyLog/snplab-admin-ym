import React from 'react';
import * as R from './Region.styled';
import { MdClose } from 'react-icons/md';
import { SubmitButton } from '../../styles/SubmitButton.styled';

const RegionModal = ({ setShowModal }: any) => {
  return (
    <R.Container>
      <R.HeaderContainer>
        <R.CloseButton
          onClick={() => {
            setShowModal(false);
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
            <R.MenuList>경기</R.MenuList>
            <R.MenuList>서울</R.MenuList>
            <R.MenuList>강원</R.MenuList>
          </R.Menu>
          <R.Menu>
            <R.MenuList>강남구</R.MenuList>
            <R.MenuList>강동구</R.MenuList>
            <R.MenuList>강북구</R.MenuList>
          </R.Menu>
        </R.MenuListContainer>
      </R.ContentContainer>
      <SubmitButton>확인</SubmitButton>
    </R.Container>
  );
};

export default RegionModal;
