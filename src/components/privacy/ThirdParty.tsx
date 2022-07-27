import React from "react";
import { MdArrowBackIos } from "react-icons/md";
import { introduction, mainContent } from "../../asset/privacypolicy";
import { MobileSizeContainer } from "../../styles/template";
import * as Privacy from "../../styles/Privacy.styled";

const ThirdPartyTemplate = ({ setShowThirdpartyModal }: any) => {
  return (
    <MobileSizeContainer>
      <Privacy.PrivacyContainer>
        <Privacy.PrivacyHeader>
          <div>
            <Privacy.GoBackButton
              onClick={(e) => {
                e.stopPropagation();
                setShowThirdpartyModal(false);
              }}
            >
              <MdArrowBackIos />
            </Privacy.GoBackButton>
          </div>
          <Privacy.Title>서비스 이용약관</Privacy.Title>
        </Privacy.PrivacyHeader>
        <Privacy.PrivacyTitleBold>제3자</Privacy.PrivacyTitleBold>
        <Privacy.PrivacyTitle>정보제공에 대한 동의 안내</Privacy.PrivacyTitle>
        <Privacy.PrivacyIntro>{introduction}</Privacy.PrivacyIntro>
        <Privacy.PrivacyMain>{mainContent}</Privacy.PrivacyMain>
      </Privacy.PrivacyContainer>
    </MobileSizeContainer>
  );
};

export default ThirdPartyTemplate;
