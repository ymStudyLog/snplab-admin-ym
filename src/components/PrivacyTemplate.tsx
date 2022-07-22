import React from "react";
import styled from "styled-components";
import { MdArrowBackIos } from "react-icons/md";
import { introduction, mainContent } from "../asset/privacypolicy";
import { Link } from "react-router-dom";
import { MobileSizeContainer } from "../styles/template";

type Props = {
  children: React.ReactNode;
};

const PrivacyTemplate = (props: Props) => {
  return (
    <MobileSizeContainer>
      <PrivacyHeader>
        <Link to="/form">
          <GoBackButton>
            <MdArrowBackIos />
          </GoBackButton>
        </Link>
        <Title>서비스 이용약관</Title>
      </PrivacyHeader>
      {props.children}
      <PrivacyMain color="#9a9a9a">{introduction}</PrivacyMain>
      <PrivacyMain color="#636363">{mainContent}</PrivacyMain>
    </MobileSizeContainer>
  );
};

export default PrivacyTemplate;

const PrivacyHeader = styled.div`
  display: flex;
  padding: 10px;
  border-bottom: 1.5px solid #c4c4c4;
`;

const Title = styled.h1`
  padding: 10px;
`;

const GoBackButton = styled.button`
  border: none;
  background: none;
  width: 100%;
  height: 100%;
  cursor: pointer;
`;

const PrivacyMain = styled.div`
  white-space: pre-line;
  text-align: start;
  line-height: 20px;
  padding: 15px;
  color: ${(props) => props.color || "black"};
`;
