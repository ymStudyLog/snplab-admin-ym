import React from 'react';
import { Button } from '../common/Button.styled';
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
  MenuHeaderContainer,
  MenuHeader,
  MenuContainer,
  MenuList,
} from './Region.styled';

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
              <MenuHeaderContainer>
                <MenuHeader>시/도</MenuHeader>
                <MenuHeader>시/구/군</MenuHeader>
              </MenuHeaderContainer>
              <MenuContainer>
                <MenuList>서울</MenuList>
                <MenuList>강동구</MenuList>
              </MenuContainer>
            </RegionContent>
            {/* <Button /> */}
          </RegionContainer>
        </ModalBackground>
      </ParentContainer>
    </Body>
  );
};

export default Region;
