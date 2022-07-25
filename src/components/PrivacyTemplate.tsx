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
      <PrivacyIntro>{introduction}</PrivacyIntro>
      <PrivacyMain>{mainContent}</PrivacyMain>
    </MobileSizeContainer>
  );
};

export default PrivacyTemplate;

const PrivacyHeader = styled.div`
  display: flex;
  padding: 10px;
  border-bottom: 1.5px solid var(--color-border);
`;

const Title = styled.h1`
  padding: 10px;
`;

const GoBackButton = styled.button`
  border: none;
  background: none;
  width: 100%;
  height: 100%;
`;

const PrivacyIntro = styled.div`
  white-space: pre-line;
  text-align: start;
  line-height: 20px;
  padding: 15px;
  color: var(--color-subtitle);
`;

const PrivacyMain = styled(PrivacyIntro)`
  color: var(--color-privacy);
`