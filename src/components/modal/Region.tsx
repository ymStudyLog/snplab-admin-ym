import React from 'react';
import { MdClose } from 'react-icons/md';
import {
  Body,
  ParentContainer,
  ModalBackground,
  RegionContainer,
  RegionHeader,
  CloseIconWrapper,
  RegionTitle,
  RegionContent,
  DropdownTitleContainer,
  DropdownTitle,
  DropdownContainer,
  Dropdown,
  DropdownList,
} from './Region.styled';
import { SubmitButton } from '../../styles/SubmitButton.styled';

const Region = (props: any) => {
  return (
    // Body, ParentContainer는 없어질 부분
    <Body>
      <ParentContainer>
        <ModalBackground>
          <RegionContainer>
            <RegionHeader>
              <CloseIconWrapper>
                <MdClose />
              </CloseIconWrapper>
              <RegionTitle>거주지역 선택</RegionTitle>
            </RegionHeader>
            <RegionContent>
              <DropdownTitleContainer>
                <DropdownTitle>시/도</DropdownTitle>
                <DropdownTitle>시/구/군</DropdownTitle>
              </DropdownTitleContainer>
              <DropdownContainer>
                <Dropdown>
                  <DropdownList>경기</DropdownList>
                  <DropdownList>서울</DropdownList>
                  <DropdownList>강원</DropdownList>
                </Dropdown>
                <Dropdown>
                  <DropdownList>강남구</DropdownList>
                  <DropdownList>강동구</DropdownList>
                  <DropdownList>강북구</DropdownList>
                </Dropdown>
              </DropdownContainer>
            </RegionContent>
            <SubmitButton>확인</SubmitButton>
          </RegionContainer>
        </ModalBackground>
      </ParentContainer>
    </Body>
  );
};

export default Region;
