import React from 'react';
import styled from 'styled-components';
import { Button } from '../common/Button.styled';
import { MdClose } from 'react-icons/md';

const Region = (props: any) => {
  return (
    <Body>
      <ParentContainer>
        <ModalBackground>
          <RegionContainer>
            <RegionHeader>
              <RegionTitle>거주지역 선택</RegionTitle>
              <CloseIconWrapper>
                <MdClose />
              </CloseIconWrapper>
            </RegionHeader>
            <ReionContent>
              <SelectionHeader />
              <SelectionContent />
              <SelectionContent />
              {/* <Button /> */}
            </ReionContent>
          </RegionContainer>
        </ModalBackground>
      </ParentContainer>
    </Body>
  );
};

export default Region;

const Body = styled.div`
  position: fixed;
  top: 0px;
  bottom: 0px;
  right: 0px;
  left: 0px;
  display: flex;
  justify-content: center;
  background-color: #fafafa;
`;

const ParentContainer = styled.div`
  border: 1px solid #dbdbdb;
  height: 80vh;
  width: 350px;
  margin: 35px 0 10px 0;
  min-height: auto;
  min-width: auto;
  background-color: #ffffff;
`;

const ModalBackground = styled.div`
  position: relative;
  height: 80vh;
  z-index: 999;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

const RegionContainer = styled.div`
  position: relative;
  width: 100%;
  height: 50vh;
  boder: 1px solid #dbdbdb;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

const RegionHeader = styled.div`
  position: relative;
  width: 100%;
  height: 13%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #000;
`;

const RegionTitle = styled.div``;

const CloseIconWrapper = styled.div``;

const ReionContent = styled.div``;

const SelectionHeader = styled.div``;

const SelectionContent = styled.div``;
